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
            ) : (
                <p className="text-center text-gray-500">No payment information available.</p>
            )}
        </div>
    );
};

export default SuccessApo;
