import { useState, useEffect } from 'react';
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const MyAppo = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axiosSecure.get(`/personalAppoinment${user.email}`);
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        if (user?.email) {
            fetchAppointments();
        }
    }, [axiosSecure, user?.email]);

    const handleCancel = async (appointmentId) => {
        try {
            const response = await axiosSecure.delete(`/appointments/${appointmentId}`);
            if (response.status === 200) {
                setAppointments(prev => prev.filter(appointment => appointment._id !== appointmentId));
            } else {
                console.error('Failed to cancel appointment');
            }
        } catch (error) {
            console.error('Error cancelling appointment:', error);
        }
    };

    const handlePay = (appointmentId) => {
        // Add your payment logic here
        console.log('Pay for appointment', appointmentId);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">My Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments found.</p>
            ) : (
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Email</th>
                            <th className="py-2 px-4">Phone</th>
                            <th className="py-2 px-4">Service</th>
                            <th className="py-2 px-4">Time</th>
                            <th className="py-2 px-4">Amount</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment._id} className="border-t">
                                <td className="py-2 px-4">{appointment.name}</td>
                                <td className="py-2 px-4">{appointment.fromemail}</td>
                                <td className="py-2 px-4">{appointment.phone}</td>
                                <td className="py-2 px-4">{appointment.serviceName}</td>
                                <td className="py-2 px-4">{appointment.time}</td>
                                <td className="py-2 px-4">{appointment.amount}</td>
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() => handlePay(appointment._id)}
                                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 mr-2"
                                    >
                                        Pay
                                    </button>
                                    <button
                                        onClick={() => handleCancel(appointment._id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyAppo;
