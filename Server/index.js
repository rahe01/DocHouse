const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8000;

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Verify Token Middleware
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ncq0h0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const userCollection = client.db("DocHouse").collection("users");
    const serviceCollection = client.db("DocHouse").collection("services");
    const doctorCollection = client.db("DocHouse").collection("doctors");
    const appoinmentService = client.db("DocHouse").collection("appoService");
    const userAppoinment = client.db("DocHouse").collection("userAppoinment");

    // auth related api
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });
    // Logout
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
        console.log("Logout successful");
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // *************** User related api***********************
    // save user in db
    app.put("/user", async (req, res) => {
      const user = req.body;

      try {
        // Check if the email already exists in the database
        const existingUser = await userCollection.findOne({
          email: user.email,
        });

        if (existingUser) {
          // If the email exists, return a response indicating that the user already exists
          return res
            .status(400)
            .send({ message: "Email already exists in the database" });
        }

        // If the email does not exist, insert the new user
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(500).send({ message: "An error occurred", error });
      }
    });



    // get all users 

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });


    // update user role 
    app.patch("/users/:id", async (req, res) => {

      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateDoc = { $set: { role: req.body.role } };
      const result = await userCollection.updateOne(query, updateDoc);
      res.send(result);
    })

    // get user by email 

    app.get('/user/:email', async (req, res)=>{
      const email = req.params.email;
      const query ={ email: email };
      const user = await userCollection.findOne(query)
      res.send(user);
    })
















    // *********************** Services related api********************

    // get services data
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    // get single service
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    // ************************apoinment service api*********************

  
    // get all apinment service

    app.get('/appoService', async (req, res) => {
      try {
        const cursor = appoinmentService.find({});
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).send({ error: 'Failed to fetch services' });
      }
    });


    app.post('/addApoinment', async (req, res) => {
      const apoinment = req.body;
      const result = await userAppoinment.insertOne(apoinment);
      res.send(result);
    });

    // get all apoinment 
    app.get('/userAppoinment', async (req, res) => {
      try {
        const cursor = userAppoinment.find({});
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        console.error('Error fetching apinment:', error);
        res.status(500).send({ error: 'Failed to fetch apinment' });
      }
    });

    // get appointment by email
    app.get("/userAppoinment/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const query = { userEmail: email };
        const results = await userAppoinment.find(query).toArray();
        res.json(results);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch apoinment" });
      }
    });


    // delet aponement

    app.delete("/userAppoinment/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userAppoinment.deleteOne(query);
      res.send(result);
    });


    // get appoinment by email
    app.get("/personalAppoinment/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const query = { userEmail: email };
        const results = await userAppoinment.find(query).toArray();
        res.json(results);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch apoinment services" });
      }
    });
    
  
   
  




    // ***********************Doctor Related api methods***********************

    // add doctor
    app.post("/addDoctor", async (req, res) => {
      const doctor = req.body;
      const result = await doctorCollection.insertOne(doctor);
      res.send(result);
    });

    // get doctor by email
    app.get("/doctor/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const query = { userEmail: email };
        const results = await doctorCollection.find(query).toArray();
        res.json(results);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch doctors" });
      }
    });

    // doctor delete
    app.delete("/doctorrr/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorCollection.deleteOne(query);
      res.send(result);
    });

    // Update doctor endpoint
    app.put("/updateDoctor/:id", async (req, res) => {
      const id = req.params.id;
      const updatedDoctor = req.body;

      // Ensure _id is not included in the update
      delete updatedDoctor._id;

      try {
        const query = { _id: new ObjectId(id) };
        const result = await doctorCollection.updateOne(query, {
          $set: updatedDoctor,
        });

        if (result.modifiedCount === 1) {
          res.json({ message: "Doctor updated successfully" });
        } else {
          res.status(404).json({ error: "Doctor not found" });
        }
      } catch (err) {
        console.error("Error updating doctor:", err);
        res.status(500).json({ error: "Failed to update doctor" });
      }
    });

    // get all doctors

    app.get("/doctors", async (req, res) => {
      try {
        const data = await doctorCollection.find({}).toArray();
        res.send(data);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving doctors data");
      }
    });

    // get doctor by id

    app.get("/doctorssss/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorCollection.findOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from StayVista Server..");
});

app.listen(port, () => {
  console.log(`StayVista is running on port ${port}`);
});
