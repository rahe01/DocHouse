import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UpdateDoctorForm from './UpdateDoctorForm';
import { toast } from 'react-toastify';

const UpdateDoctorModal = ({ setIsEditModalOpen, isOpen, doctorData, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState(doctorData);

  useEffect(() => {
    setDoctor(doctorData);
  }, [doctorData]);

  const handleImageChange = (imageUrl) => {
    setDoctor({ ...doctor, profilePicture: imageUrl });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosSecure.put(`/updateDoctor/${doctor._id}`, doctor);
      refetch();
      setIsEditModalOpen(false);
      setLoading(false);
      toast.success('Doctor updated successfully');
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={() => setIsEditModalOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <Dialog.Title className="bg-gray-50 border-b border-gray-200 p-4 text-lg font-medium text-gray-900">
                Update Doctor Info
              </Dialog.Title>
              <div className="p-6">
                <UpdateDoctorForm
                  handleSubmit={handleSubmit}
                  doctor={doctor}
                  handleChange={handleChange}
                  loading={loading}
                  handleImageChange={handleImageChange}
                />
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateDoctorModal.propTypes = {
  setIsEditModalOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  doctorData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UpdateDoctorModal;
