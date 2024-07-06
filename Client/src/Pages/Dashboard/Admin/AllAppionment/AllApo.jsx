import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AllApo = () => {
    const axiosSecure = useAxiosSecure();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axiosSecure.get('/userAppoinment');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [axiosSecure]);

    const handleCancel = async (appointmentId) => {
        try {
            const response = await axiosSecure.delete(`/userAppoinment/${appointmentId}`);
            if (response.status === 200) {
                setAppointments(prev => prev.filter(appointment => appointment._id !== appointmentId));
                toast.success('Appointment cancelled successfully');
            } else {
                console.error('Failed to cancel appointment');
            }
        } catch (error) {
            console.error('Error cancelling appointment:', error);
            toast.error('Failed to cancel appointment');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">All Appointments</h2>
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
                            <th className="py-2 px-4">User Email</th>
                            <th className="py-2 px-4">Action</th>
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
                                <td className="py-2 px-4">{appointment.userEmail}</td>
                                <td className="py-2 px-4">
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

export default AllApo;
