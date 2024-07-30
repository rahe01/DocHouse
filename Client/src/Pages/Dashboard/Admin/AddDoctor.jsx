import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Input, Select, Option } from "@material-tailwind/react";
import {
  FaUserMd, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLanguage,
  FaAward, FaBook, FaBriefcase, FaUniversity, FaConciergeBell,
  FaDollarSign, FaStethoscope, FaLinkedin, FaFacebook,
  FaTwitter
} from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AddDoctor = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [doctor, setDoctor] = useState({
    name: "",
    profilePicture: "",
    contact: "",
    location: "",
    qualifications: "",
    specialties: "",
    experience: "",
    memberships: "",
    languages: "",
    bio: "",
    education: "",
    services: "",
    hours: "",
    booking: "",
    reviews: "",
    insurance: "",
    payment: "",
    awards: "",
    research: "",
    community: "",
    socialMedia: {
      linkedin: "",
      facebook: "",
      twitter: "",
    },
    amount: "", // Added amount field
    userEmail: user?.email || "",
    userName: user?.displayName || "",
    userPicture: user?.photoURL || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setDoctor({
        ...doctor,
        [parent]: {
          ...doctor[parent],
          [child]: value,
        },
      });
    } else {
      setDoctor({
        ...doctor,
        [name]: value,
      });
    }
  };

  const handleSelectChange = (name, value) => {
    setDoctor({
      ...doctor,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add doctor to the database
    axiosSecure.post('/addDoctor', doctor)
      .then(data => {
        console.log(data.data);
        toast.success('Doctor added successfully');
        navigate('/dashboard/my-added-doctors');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Add Doctor - DocHouse </title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <Input
            label="Full Name"
            icon={<FaUserMd />}
            name="name"
            value={doctor.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Profile Picture URL"
            icon={<FaUserMd />}
            name="profilePicture"
            value={doctor.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Contact Information"
            icon={<FaPhone />}
            name="contact"
            value={doctor.contact}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Office Location"
            icon={<FaMapMarkerAlt />}
            name="location"
            value={doctor.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Qualifications"
            icon={<FaGraduationCap />}
            name="qualifications"
            value={doctor.qualifications}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Years of Experience"
            icon={<FaBriefcase />}
            name="experience"
            value={doctor.experience}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Professional Memberships"
            icon={<FaStethoscope />}
            name="memberships"
            value={doctor.memberships}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Languages Spoken"
            icon={<FaLanguage />}
            name="languages"
            value={doctor.languages}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Educational Background"
            icon={<FaUniversity />}
            name="education"
            value={doctor.education}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Services Offered"
            icon={<FaConciergeBell />}
            name="services"
            value={doctor.services}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Appointment Booking Link"
            icon={<FaBook />}
            name="booking"
            value={doctor.booking}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Accepted Insurance Plans"
            icon={<FaDollarSign />}
            name="insurance"
            value={doctor.insurance}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Awards and Recognitions"
            icon={<FaAward />}
            name="awards"
            value={doctor.awards}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Published Research or Articles"
            icon={<FaBook />}
            name="research"
            value={doctor.research}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Community Involvement"
            icon={<FaStethoscope />}
            name="community"
            value={doctor.community}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="LinkedIn"
            icon={<FaLinkedin />}
            name="socialMedia.linkedin"
            value={doctor.socialMedia.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Facebook"
            icon={<FaFacebook />}
            name="socialMedia.facebook"
            value={doctor.socialMedia.facebook}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Twitter"
            icon={<FaTwitter />}
            name="socialMedia.twitter"
            value={doctor.socialMedia.twitter}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Amount"
            icon={<FaDollarSign />}
            name="amount"
            value={doctor.amount}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          
          <Select
            label="Select Specialty"
            name="specialties"
            value={doctor.specialties}
            onChange={(value) => handleSelectChange("specialties", value)}
            className=""
          >
            <Option value="Orthodontics">Orthodontics</Option>
            <Option value="Periodontics">Periodontics</Option>
            <Option value="Endodontics">Endodontics</Option>
            <Option value="Pediatric Dentistry">Pediatric Dentistry</Option>
            <Option value="Oral Surgery">Oral Surgery</Option>
            <Option value="Prosthodontics">Prosthodontics</Option>
            <Option value="General Dentistry">General Dentistry</Option>
          </Select>
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={doctor.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:to-black border-gray-500 textarea textarea-primary"
          ></textarea>
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="reviews">
            Patient Reviews
          </label>
          <textarea
            name="reviews"
            id="reviews"
            value={doctor.reviews}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 border-gray-500 textarea textarea-primary"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="payment">
            Payment Options
          </label>
          <Select
            label="Select Payment Option"
            name="payment"
            value={doctor.payment}
            onChange={(value) => handleSelectChange("payment", value)}
            className=""
          >
            <Option value="Cash">Cash</Option>
            <Option value="Credit Card">Credit Card</Option>
            <Option value="Insurance">Insurance</Option>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="hours">
            Office Hours
          </label>
          <Select
            label="Select Office Hours"
            name="hours"
            value={doctor.hours}
            onChange={(value) => handleSelectChange("hours", value)}
            className=""
          >
            <Option value="9am - 5pm">9am - 5pm</Option>
            <Option value="10am - 6pm">10am - 6pm</Option>
            <Option value="11am - 7pm">11am - 7pm</Option>
            <Option value="12pm - 8pm">12pm - 8pm</Option>
          </Select>
        </div>
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="btn btn-outline w-full border-[#F7A582] hover:border-[#F7A582] hover:bg-[rgb(247,165,130)] text-md text-[#F7A582] font-bold"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
