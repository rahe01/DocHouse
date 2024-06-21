import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import Button from "../../../Components/Button/Button";

const Contact = () => {
  return (
    <div>
      <div className="flex p-10  md:p-20 bg-[#07332F] text-white items-center justify-center flex-col md:flex-row rounded-xl">
        <div>
          <h1 className="text-4xl font-bold ">Contact With Us</h1>
          <p className=" font-medium text-xl p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            tempora.
          </p>

          <div className="flex items-center gap-2 py-2">
            <IoLocationSharp className="text-xl"></IoLocationSharp>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-2 py-2">
            <MdOutlinePermPhoneMsg className="text-xl"></MdOutlinePermPhoneMsg>
            <p>01800000000</p>
          </div>
        </div>
        <form action="">
          <div className="flex gap-2">
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs  bg-[#FFFFFF0D]"
              />
              <input
                type="number"
                placeholder="Number"
                className="input input-bordered w-full max-w-xs   bg-[#FFFFFF0D]"
              />
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered w-full max-w-xs  bg-[#FFFFFF0D]"
              />
            </div>

            <div className="flex flex-col space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs  bg-[#FFFFFF0D]"
              />

              <input
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered w-full max-w-xs   bg-[#FFFFFF0D]"
              />
              <input
                type="time"
                placeholder="Time"
                className="input input-bordered w-full max-w-xs  bg-[#FFFFFF0D]"
              />
            </div>
          </div>
          <div className="card-actions  w-full py-5">
            <Button title="Book Now"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
