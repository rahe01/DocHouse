import  { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import DoctorRow from "./TableRow/DoctorRow";
import { Helmet } from 'react-helmet';

const MyAddDoc = () => {
  const { user } = useAuth();
  const email = user?.email;

  const axiosSecure = useAxiosSecure();

  // Initialize doctors state as an array
  const [doctors, setDoctors] = useState([]);

  const {
    isLoading,
    refetch,
    error
  } = useQuery({
    queryKey: ['doctor', email],
    queryFn: async () => {
      try {
        console.log(`Fetching data from /doctor/${email}`); // Debug log
        const response = await axiosSecure(`/doctor/${email}`);
        const data = response.data;

        // Ensure data is always an array
        if (Array.isArray(data)) {
          setDoctors(data);
        } else if (typeof data === 'object' && data !== null) {
          setDoctors([data]);
        } else {
          console.error('Unexpected data format:', data);
          return [];
        }

        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch doctors');
      }
    }
  });

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data. Please try again later.</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Show message if no doctors are found
  if (!Array.isArray(doctors) || doctors.length === 0) {
    return <div>No doctors found.</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <Helmet>
        <title>My Doctors - DocHouse</title>
      </Helmet>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Photo
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Speciality
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              {doctors.map((doctor) => (
            <DoctorRow key={doctor._id} doctor={doctor} refetch={refetch} id={doctor._id} />
          ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddDoc;
