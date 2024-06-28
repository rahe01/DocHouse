
import { useLoaderData, useLocation, useNavigate, } from 'react-router-dom';
import { FaDollarSign, FaClock, FaUserMd, FaMapMarkerAlt, FaPhone, FaStar, FaCalendarAlt, FaStickyNote, FaInfoCircle } from 'react-icons/fa';



const ServicesDetails = () => {
 
  const data = useLoaderData();
  
  // Destructure the data
  const {
    label,
    desc,
    price,
    duration,
    provider,
    location,
    contact,
    rating,
    availability,
    notes,
    additional_info,
    image
  } = data;

  const navigate = useNavigate();
  const locationdata = useLocation();

  console.log(locationdata);

  const handleBack = () => {
   
      navigate(-1); // Go back to the previous page

  };


  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{label}</h1>
      <img src={image} alt={label} className="w-full h-64 object-cover mb-4 rounded" />
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {desc}</p>
      <div className="flex items-center mb-2">
        <FaDollarSign className="mr-2 text-green-500" />
        <p className="text-gray-700"><strong>Price:</strong> {price}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaClock className="mr-2 text-blue-500" />
        <p className="text-gray-700"><strong>Duration:</strong> {duration}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaUserMd className="mr-2 text-purple-500" />
        <p className="text-gray-700"><strong>Provider:</strong> {provider}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
        <p className="text-gray-700"><strong>Location:</strong> {location}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaPhone className="mr-2 text-yellow-500" />
        <p className="text-gray-700"><strong>Contact:</strong> {contact}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaStar className="mr-2 text-yellow-400" />
        <p className="text-gray-700"><strong>Rating:</strong> {rating}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaCalendarAlt className="mr-2 text-orange-500" />
        <p className="text-gray-700"><strong>Availability:</strong> {availability}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaStickyNote className="mr-2 text-gray-500" />
        <p className="text-gray-700"><strong>Notes:</strong> {notes}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaInfoCircle className="mr-2 text-blue-400" />
        <p className="text-gray-700"><strong>Additional Info:</strong> {additional_info}</p>
      </div>
      <button className="btn btn-outline w-full border-[#F7A582] hover:border-[#F7A582] hover:bg-[#F7A582] text-md text-[#F7A582] font-bold" onClick={handleBack}> Back to Services</button>
    </div>
  );
};

export default ServicesDetails;
