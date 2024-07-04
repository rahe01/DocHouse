import { useEffect, useState } from "react";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosInstance = useAxiosCommon();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/doctors");
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
 <h1 className="text-4xl font-bold text-center">Our Expert Doctors</h1>
<p className="text-center font-medium text-xl p-5">
  Our team of expert doctors is dedicated to providing top-notch medical care and personalized treatment. With a wealth of experience and specialized skills, they are committed to ensuring your health and well-being. Trust our professionals to support you with the highest standards of medical excellence.
</p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors
          .filter((doctor) => doctor.type === "head")
          .map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
      </div>

      <div className="flex justify-center my-5">
        <Link to={'/allDoctors'}>
          <button className="btn btn-outline  border-[#F7A582] hover:border-[#F7A582] hover:bg-[rgb(247,165,130)] text-md text-[#F7A582] font-bold">
            View All Doctor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
