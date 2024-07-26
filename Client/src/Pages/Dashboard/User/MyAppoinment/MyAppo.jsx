import { useState, useEffect } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MyAppo = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [appointments, setAppointments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [appointmentToDelete, setAppointmentToDelete] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axiosSecure.get(`/personalAppoinment/${user.email}`);
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        if (user?.email) {
            fetchAppointments();
        }
    }, [axiosSecure, user?.email]);

    const handleCancelClick = (appointmentId) => {
        setAppointmentToDelete(appointmentId);
        setIsOpen(true);
    };

    const handleConfirmCancel = async () => {
        try {
            const response = await axiosSecure.delete(`/userAppoinment/${appointmentToDelete}`);
            if (response.status === 200) {
                setAppointments(prev => prev.filter(appointment => appointment._id !== appointmentToDelete));
                setIsOpen(false);
                setAppointmentToDelete(null);
            } else {
                console.error('Failed to cancel appointment');
            }
        } catch (error) {
            console.error('Error cancelling appointment:', error);
        }
    };
    const handleCreatePayment = async (appointmentId) => {
        // Find the appointment with the given ID
        const appointment = appointments.find(app => app._id === appointmentId);

        if (appointment) {
            const { name, fromemail, amount, serviceName , time} = appointment;
            const amountInt = parseInt(amount.replace('$', ''));

            try {
                const response = await axiosSecure.post('/create-payment', {
                    name,
                    email: user?.email, // Current user's email
                    amount : amountInt,
                    fromemail,
                    serviceName,
                    time
                });
                toast.success('Payment created successfully');
                console.log(response)
                const redirectUrl = response.data.paymentUrl
                
                if(redirectUrl){
                    window.location.replace(redirectUrl)
                }

            } catch (error) {
                console.error('Error creating payment:', error);
                toast.error('Error creating payment');
            }
        } else {
            console.error('Appointment not found');
            toast.error('Appointment not found');
        }
        
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
                                        onClick={() => handleCreatePayment(appointment._id)}
                                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 mr-2"
                                    >
                                        Pay
                                    </button>
                                    <button
                                        onClick={() => handleCancelClick(appointment._id)}
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

            {isOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Confirm Cancellation
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to cancel this appointment? This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleConfirmCancel}
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAppo;
