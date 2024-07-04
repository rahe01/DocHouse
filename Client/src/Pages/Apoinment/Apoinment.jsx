import Calender from "./Calender";
import DocServices from "./DocServices/DocServices";


const Apoinment = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
        <p className="text-lg text-gray-700 mb-4">
          Select a date for your appointment using the calendar below. Our team
          is ready to assist you at your convenience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="order-2 md:order-1">
            <Calender />
          </div>
          <div className="order-1 md:order-2">
            <img
              className="w-full h-auto rounded-lg"
              src="https://i.ibb.co/pLtvVMX/pexels-fr3nks-305565.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <DocServices></DocServices>
    </div>
  );
};

export default Apoinment;
