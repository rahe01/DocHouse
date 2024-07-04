import { useEffect, useState } from "react";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import DoctorCard from "../../Home/Doctor/DoctorCard";
import { Select, Option } from "@material-tailwind/react"; // Import Select and Option from Material Tailwind

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const axiosInstance = useAxiosCommon();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/doctors');
      setDoctors(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once on mount

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (value) => {
    setSortOption(value);
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    console.log(`Sorting by: ${sortOption}`); // Debug log

    switch (sortOption) {
      case "specialty":
        return a.specialties.localeCompare(b.specialties);
      case "name":
        return a.name.localeCompare(b.name);
      case "experience":
        // Ensure experience is a number for comparison
        // eslint-disable-next-line no-case-declarations
        const expA = parseInt(a.experience, 10);
        // eslint-disable-next-line no-case-declarations
        const expB = parseInt(b.experience, 10);
        if (isNaN(expA)) return 1; // Handle non-numeric experience
        if (isNaN(expB)) return -1; // Handle non-numeric experience
        return expA - expB;
      // Add more cases for other sorting options as needed
      default:
        return 0;
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
       <div className=" flex items-center justify-center flex-col space-y-5">
      
      <h1 className="text-4xl font-bold pt-5">Our Expert Doctors</h1>
          <h3 className="text-2xl font-bold">
            We Help To Get
            Soultions
          </h3>
      <p className="my-6 px-5 lg:px-12 text-center">
        Welcome to our comprehensive directory of doctors. Here, you can find detailed information about each doctor, including their specialties, experience, and more. Use the search bar to find doctors by name, and sort the list by specialty, name, or experience to meet your specific needs. We are committed to helping you find the right healthcare professional with ease.
      </p>
       </div>
      <div className="flex justify-between items-center mb-4">
        
      <div>
      <h1 className="text-lg font-bold">Search by Doctor Name</h1>
      <input
          type="text"
          placeholder="Search doctors"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>
        <div className="w-72">
            <h1 className="text-lg font-bold ">Sort by :</h1>
          <Select
            color="blue"
            onChange={(value) => handleSort(value)}
            value={sortOption}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <Option value="">Sort by</Option>
            <Option value="specialty">Specialty</Option>
            <Option value="name">Name</Option>
            <Option value="experience">Experience</Option>
            {/* Add more options for different sorting criteria if needed */}
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedDoctors.map(doctor => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
