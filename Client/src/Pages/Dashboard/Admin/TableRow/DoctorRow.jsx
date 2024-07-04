import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import useAxiosCommon from '../../../../Hooks/useAxiosCommon';
import UpdateDoctorModal from '../UpdateDoctorModal';

const DoctorRow = ({ doctor, refetch }) => {
  const axios = useAxiosCommon();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    axios.delete(`/doctorrr/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          refetch();
        } 
      })
      .catch(error => {
        console.error('Error deleting doctor:', error);
      });
  };

  const handleUpdate = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="px-5 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={doctor.profilePicture} alt={doctor.name} />
            </div>
          </div>
        </td>
        <td className="px-5 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{doctor.name}</div>
        </td>
        <td className="px-5 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{doctor.specialties}</div>
        </td>
        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
          <Button onClick={handleUpdate} color="green">Update</Button>
          <Button onClick={() => handleDelete(doctor._id)} color="red">Delete</Button>
        </td>
      </tr>
      <UpdateDoctorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        doctorData={doctor}
        refetch={refetch}
        setIsEditModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default DoctorRow;
