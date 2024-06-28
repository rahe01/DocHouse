
import about from '../../../public/about.json';
import LittleDetails from '../Home/LittleDetails/LittleDetails';

const About = () => {
  const { clinicName, missionStatement, dentist, clinicDetails, team, testimonials } = about.aboutSection;

  return (
    <div className="about-container p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-4">{clinicName}</h1>
      <p className="text-xl text-center mb-8">{missionStatement}</p>

      <div className="dentist-section flex flex-col items-center md:flex-row mb-12">
        <img src={dentist.photo} alt={dentist.name} className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6" />
        <div className="dentist-details text-center md:text-left">
          <h2 className="text-2xl font-semibold">{dentist.name}</h2>
          <p className="text-lg text-gray-600">{dentist.qualification}</p>
          <p className="mt-2">{dentist.bio}</p>
          <h3 className="text-xl font-semibold mt-4">Specialties</h3>
          <ul className="list-disc list-inside">
            {dentist.specialties.map((specialty, index) => (
              <li key={index}>{specialty}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="clinic-details mb-12">
        <h3 className="text-xl font-semibold mb-2">Clinic Details</h3>
        <p>{clinicDetails.address}</p>
        <p>{clinicDetails.phone}</p>
        <p>{clinicDetails.email}</p>
        <div className="working-hours mt-4">
          <h4 className="font-semibold">Working Hours</h4>
          {Object.keys(clinicDetails.workingHours).map((day, index) => (
            <p key={index}>
              {day.charAt(0).toUpperCase() + day.slice(1)}: {clinicDetails.workingHours[day]}
            </p>
          ))}
        </div>
      </div>

      <div className="team mb-12">
        <h3 className="text-xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {team.map((member, index) => (
            <div key={index} className="team-member p-4 bg-white rounded-lg shadow">
              <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="text-center text-lg font-semibold">{member.name}</h4>
              <p className="text-center text-gray-600">{member.role}</p>
              <p className="text-center mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials mb-12">
        <h3 className="text-xl font-semibold mb-4">Testimonials</h3>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial p-4 bg-white rounded-lg shadow mb-4">
            <p className="text-gray-800">{testimonial.feedback}</p>
            <p className="text-right text-gray-600">- {testimonial.name}, {testimonial.date}</p>
          </div>
        ))}
      </div>

      <LittleDetails></LittleDetails>
    </div>
  );
};

export default About;
