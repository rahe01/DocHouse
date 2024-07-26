import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const SuccessApoUser = () => {
    const [payInfo, setPayInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
      
            axiosSecure.get(`/paymentInfoByEmail/${user?.email}`)
                .then(res => {
                    console.log('Response data:', res.data);
                    // Ensure the data is an array
                    if (Array.isArray(res.data)) {
                        setPayInfo(res.data);
                    } else {
                        setPayInfo([]);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching payment info:', err);
                    setPayInfo([]);  // Set to empty array in case of error
                    setLoading(false);
                });
     
    }, [axiosSecure, user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (payInfo.length === 0) {
        return <div>Error: Payment information is not available</div>;
    }
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {payInfo.map((payment) => (
                    <div key={payment._id} className="p-4 border rounded-lg shadow-md bg-white">
                        <p className="text-lg font-semibold">Customer Name: {payment.cus_name}</p>
                        <p className="text-sm">Payment ID: {payment.paymentId}</p>
                        <p className="text-sm">Amount: ${payment.amount}</p>
                        <p className={`text-sm font-bold ${payment.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>Status: {payment.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessApoUser;
