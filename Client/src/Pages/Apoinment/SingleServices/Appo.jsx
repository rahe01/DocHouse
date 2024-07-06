import { useState } from 'react';
import { FaRegClock, FaDollarSign } from 'react-icons/fa';
import Modal from './Modal'; // Assuming Modal component is correctly imported

const Appo = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }

 

  return (
    <div>
      <h1 className="text-3xl font-semibold mt-4 mb-8 text-center">
        Available slots for {service.name}
      </h1>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={service.image}
            alt={service.name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>
          <p className="flex items-center"><FaRegClock className="mr-2 text-blue-500" /> {service.time}</p>
          <p className="flex items-center"><FaDollarSign className="mr-2 text-green-500" /> {service.amount}</p>
          
          <div className="card-actions">
            <button  className="btn btn-outline border-[#F7A582] hover:border-[#F7A582] hover:bg-[rgb(247,165,130)] text-md text-[#F7A582] font-bold" onClick={() => setIsModalOpen(true)}>Book Appointment</button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} service={service}  />
    </div>
  );
};

export default Appo;
