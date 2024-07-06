import { useEffect, useState } from 'react';
import Single from './Single';
import useAxiosCommon from '../../../Hooks/useAxiosCommon';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import Appo from '../SingleServices/Appo';

const DocServices = () => {
  // Get today's date
  const today = new Date();
  const axio = useAxiosCommon();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Format date as desired (e.g., "April 30, 2022")
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // State to keep track of the selected service
  const [selectedService, setSelectedService] = useState(null);

  // Fetch services
  const fetchServices = async () => {
    try {
      const res = await axio.get('/appoService');
      setServices(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handler function to update the selected service
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <p className="text-gray-500">On {formattedDate}</p>
        <h1 className="text-3xl font-semibold mt-4 mb-8">Please select a service.</h1>
      </div>
      
      {loading && <LoadingSpinner></LoadingSpinner>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading && !error && services.map((service, index) => (
          <Single
            key={index}
            name={service.name}
            image={service.image}
            bgColor={service.bg}
            onClick={() => handleServiceClick(service)}
          />
        ))}
      </div>

      {/* Conditionally render the selected service details */}
      {selectedService && (
      <Appo service={selectedService}></Appo>
      )}
    </div>
  );
};

export default DocServices;
