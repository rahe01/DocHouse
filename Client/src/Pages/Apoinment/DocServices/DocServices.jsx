import services from '../../../../public/docservice.json';
import Single from './Single';

const DocServices = () => {
  // Get today's date
  const today = new Date();
  
  // Format date as desired (e.g., "April 30, 2022")
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <p className="text-gray-500">On: {formattedDate}</p>
        <h1 className="text-3xl font-semibold mt-4 mb-8">Please select a service.</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Single key={index} name={service.name} image={service.image} bgColor={service.bg}></Single>
        ))}
      </div>
    </div>
  );
};

export default DocServices;
