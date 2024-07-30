import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <title>Payment History - DocHouse</title>
            </Helmet>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                        <th className="border border-gray-300 px-4 py-2">Payment ID</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payInfo.map((payment) => (
                        <tr key={payment._id} className="bg-white">
                            <td className="border border-gray-300 px-4 py-2">{payment.cus_name}</td>
                            <td className="border border-gray-300 px-4 py-2">{payment.paymentId}</td>
                            <td className="border border-gray-300 px-4 py-2">${payment.amount}</td>
                            <td className={`border border-gray-300 px-4 py-2 font-bold ${payment.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                                {payment.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SuccessApoUser;
