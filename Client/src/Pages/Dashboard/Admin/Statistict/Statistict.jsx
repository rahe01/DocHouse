import { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt, FaMoneyBill } from "react-icons/fa";
import { Progress } from "@material-tailwind/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

// Register the necessary chart components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const Statistict = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [payInfo, setPayInfo] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  console.log(payInfo.length)

  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((response) => {
        setUsers(response.data); // Assuming response.data contains the user data
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [axiosSecure]);

  useEffect(() => {
    axiosSecure
      .get("/paymentInfo")
      .then((response) => {
        const payments = response.data; // Assuming response.data contains the payment info data
        setPayInfo(payments);

        // Calculate the total amount
        const total = payments.reduce((sum, payInfo) => sum + payInfo.amount, 0);
        setTotalAmount(total);

        // Prepare chart data
        const labels = payments.map(payment => payment.date); // Adjust this based on your date field
        const amounts = payments.map(payment => payment.amount);
        console.log(amounts)

        const data = {
          labels: labels,
          datasets: [{
            label: 'Payment Amounts',
            data: amounts,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        };
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching payment info:", error);
      });
  }, [axiosSecure]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap justify-evenly space-y-4 sm:space-y-0">
        <div className="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-auto">
          <div className="bg-green-200 p-3 rounded-3xl mb-4 sm:mb-0">
            <FaMoneyBill className="text-green-500 w-10 h-10 sm:w-20 sm:h-20" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Total Amount</h3>
            <p className="text-xl font-semibold">{totalAmount}$</p>
            <Progress value={Math.min(totalAmount / 100, 100)} className="mt-2" color="green" />
          </div>
        </div>

        <div className="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-auto">
          <div className="bg-blue-200 p-3 rounded-3xl mb-4 sm:mb-0">
            <FaUser className="text-blue-500 w-10 h-10 sm:w-20 sm:h-20" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Patients</h3>
            <p className="text-xl font-semibold">{users.length}+</p>
            <Progress value={Math.min(users.length, 100)} className="mt-2" color="blue" />
          </div>
        </div>

        <div className="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-auto">
          <div className="bg-red-200 p-3 rounded-3xl mb-4 sm:mb-0">
            <FaCalendarAlt className="text-red-500 w-10 h-10 sm:w-20 sm:h-20" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Appointments</h3>
            <p className="text-xl">{payInfo.length}</p>
            <Progress value={75} className="mt-2" color="red" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Payment Chart</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Statistict;
