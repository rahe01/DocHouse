
import { FaUserMd, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLanguage, FaAward, FaBook, FaBriefcase, FaUniversity, FaConciergeBell, FaDollarSign, FaStethoscope, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Input } from '@material-tailwind/react';

const UpdateDoctorForm = ({ handleSubmit, doctor, handleChange, loading, handleImageChange }) => {
  return (
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
          onChange={(e) => handleImageChange(e.target.value)}
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
          icon={<FaBook />}
          name="community"
          value={doctor.community}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Input
          label="LinkedIn Profile"
          icon={<FaLinkedin />}
          name="socialMedia.linkedin"
          value={doctor.socialMedia.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Facebook Profile"
          icon={<FaFacebook />}
          name="socialMedia.facebook"
          value={doctor.socialMedia.facebook}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Twitter Profile"
          icon={<FaTwitter />}
          name="socialMedia.twitter"
          value={doctor.socialMedia.twitter}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className={`btn btn-outline w-full border-[#F7A582] hover:border-[#F7A582] hover:bg-[rgb(247,165,130)] text-md text-[#F7A582] font-bold' : ''}`}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Doctor'}
        </button>
      </div>
    </form>
  );
};

export default UpdateDoctorForm;