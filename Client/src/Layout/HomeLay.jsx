import Hero from "../Pages/Home/Hero/Hero";
import LittleDetails from "../Pages/Home/LittleDetails/LittleDetails";
import Review from "../Pages/Home/Review/Review";
import Services from "../Pages/Home/Services/Services";
import Doctor from "../Pages/Home/Doctor/Doctor";
import Contact from "../Pages/Home/Contact/Contact";
import { Helmet } from "react-helmet";




const HomeLay = () => {
    return (
        <div>
            <Helmet>
                <title>DocHouse || Home</title>
            </Helmet>
            <Hero></Hero>
            <Services></Services>
            <LittleDetails></LittleDetails>
            <Review></Review>
            <Doctor></Doctor>
            <Contact></Contact>
            
            
        </div>
    );
};

export default HomeLay;