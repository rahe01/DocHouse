import { LuClock2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

const LittleDetails = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 ">
            <div
            className="h-40 bg-[#07332F] rounded-2xl text-white flex items-center justify-center gap-5"
            >
                <LuClock2 className="text-5xl"/>
                <div>
                <p className="text-2xl font-bold">Opening Hours</p>
                <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>

            </div>
            <div
            className="h-40 bg-[#F7A582] rounded-2xl text-white flex items-center justify-center gap-5"
            >
                <IoLocationOutline className="text-5xl"/>
                <div>
                <p className="text-2xl font-bold">Our Locations</p>
                <p>Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</p>
                </div>

            </div>
            <div
            className="h-40 bg-[#07332F] rounded-2xl text-white flex items-center justify-center gap-5"
            >
                <FiPhoneCall className="text-5xl"/>
                <div>
                <p className="text-2xl font-bold">Contact Us</p>
                <p>+88 01750 00 00 00 <br /> 
                +88 01750 00 00 00 </p>
                </div>

            </div>
            
        </div>
    );
};

export default LittleDetails;