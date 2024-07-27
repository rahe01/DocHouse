import { useEffect, useState } from "react";
import { FaUserMd, FaUser, FaCalendarAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Statistict = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    console.log(users.length);

    useEffect(() => {
        axiosSecure.get('/users')
            .then(response => {
                setUsers(response.data); // Assuming response.data contains the user data
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [axiosSecure]);

    return (
        <div className="p-4 space-y-4">
            <div className="flex flex-wrap justify-evenly space-y-4 sm:space-y-0">
                <div className="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-auto">
                    <div className="bg-blue-200 p-3 rounded-3xl mb-4 sm:mb-0">
                        <FaUserMd className="text-blue-500 w-10 h-10 sm:w-20 sm:h-20" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold">Doctors</h3>
                        <p className="text-xl">50</p> {/* Replace with actual number */}
                    </div>
                </div>

                <div className="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-auto">
                    <div className="bg-green-200 p-3 rounded-3xl mb-4 sm:mb-0">
                        <FaUser className="text-green-500 w-10 h-10 sm:w-20 sm:h-20" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold">Patients</h3>
                        <p className="text-xl font-semibold">{users.length}+</p> {/* Replace with actual number */}
                    </div>
                </div>

                <div className="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-auto">
                    <div className="bg-red-200 p-3 rounded-3xl mb-4 sm:mb-0">
                        <FaCalendarAlt className="text-red-500 w-10 h-10 sm:w-20 sm:h-20" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold">Appointments</h3>
                        <p className="text-xl">150</p> {/* Replace with actual number */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistict;
