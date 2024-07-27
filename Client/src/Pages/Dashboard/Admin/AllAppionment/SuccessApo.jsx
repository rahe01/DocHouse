import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const SuccessApo = () => {
    const [payInfo, setPayInfo] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('paymentInfo')
            .then(res => {
                setPayInfo(res.data);
            })
            .catch(err => console.error(err));
    }, [axiosSecure]);

    return (
        <div className="p-4">
            {payInfo.length > 0 ? (
                <div className="overflow-x-auto">
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
            ) : (
                <p className="text-center text-gray-500">No payment information available.</p>
            )}
        </div>
    );
};

export default SuccessApo;
