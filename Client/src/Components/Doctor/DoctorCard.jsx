import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

const DoctorCard = () => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src="https://i.ibb.co/q0GLWbX/pexels-moose-photos-170195-1036620.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Karyen Anderson</h2>
          <p>BTP - Senior Physiotherapist</p>
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
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>

                <div className="flex items-center gap-2 py-2">
                    <FaCalendarPlus className="text-xl"></FaCalendarPlus>
                    <p>Open 9.00 am to 5.00pm</p>
                </div>

                <div className="flex items-center gap-2 py-2">
                    <AiFillDollarCircle className="text-xl"></AiFillDollarCircle>
                    <p>Fee: 500</p>
                </div>
            </div>





          <div className="card-actions  w-full">
          <button className="btn btn-outline w-full border-[#F7A582] hover:border-[#F7A582] hover:bg-[#F7A582] text-md text-[#F7A582] font-bold">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
