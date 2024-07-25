import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import useAxiosCommon from '../../../../Hooks/useAxiosCommon';
import UpdateDoctorModal from '../UpdateDoctorModal';

const DoctorRow = ({ doctor, refetch }) => {
  const axios = useAxiosCommon();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleConfirmDelete = () => {
    handleDelete(doctor._id);
    closeConfirmModal();
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
          <Button onClick={openConfirmModal} color="red">Delete</Button>
        </td>
      </tr>
      <UpdateDoctorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        doctorData={doctor}
        refetch={refetch}
        setIsEditModalOpen={setIsModalOpen}
      />

      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Confirm Deletion
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this doctor? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleConfirmDelete}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeConfirmModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorRow;
