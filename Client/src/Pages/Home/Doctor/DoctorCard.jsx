import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { name, specialties, amount, location , profilePicture,hours } = doctor;
  return (
    <div>
      <div className="card w-96 glass">
      <figure className="px-10 pt-10">
    <img
      src={profilePicture}
      alt={name}
      className="rounded-xl" />
  </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{specialties}</p>
          <div className="rating border-b-2 pb-3 ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 w-4 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 w-4 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 w-4 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 w-4 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 w-4 bg-orange-400"
              checked
            />
          </div>

          <div>
            <div className="flex items-center gap-2 py-2">
              <IoLocationSharp className="text-xl"></IoLocationSharp>
              <p>{location}</p>
            </div>

            <div className="flex items-center gap-2 py-2">
              <FaCalendarPlus className="text-xl"></FaCalendarPlus>
              <p> {hours}</p>
            </div>

            <div className="flex items-center gap-2 py-2">
              <AiFillDollarCircle className="text-xl"></AiFillDollarCircle>
              <p>Fee: {amount}</p>
            </div>
          </div>
          <Link to={`/doctor/${doctor._id}`}>
          <div className="card-actions  w-full">
          
              <Button title="View Details"></Button>
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
