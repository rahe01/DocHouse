import {
  Dialog,
  Transition,
  DialogTitle,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import useAuth from './../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useNavigate,  } from 'react-router-dom';

const Modal = ({ closeModal, isOpen, service }) => {
  const { amount, time, name: serviceName } = service;
  const axiosSecure = useAxiosSecure();
  const [name, setName] = useState('');
  const [fromemail, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {user} = useAuth();
  const navigation = useNavigate();

  // Log the entire auth object to understand its structure
  console.log(user);

const {displayName, email} = user || {};

  console.log( displayName, email);

  const modalHandler = async () => {
    const appointmentData = {
      amount,
      time,
      name,
      fromemail,
      phone,
      serviceName,
      userEmail: email, // Add the user's email to the appointment data
    };

    try {
      await axiosSecure.post('/addApoinment', appointmentData);
      toast.success('Appointment booked successfully!')
      closeModal();
      navigation('/dashboard/my-appointments');

    } catch (error) {
      console.error(error);
      toast.error('Failed to book appointment. Please try again later.');
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Appointment for {serviceName}
                </DialogTitle>
               
                <hr className='mt-8 ' />
                <div className='mt-4 space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Amount</label>
                    <input
                      type='text'
                      value={amount}
                      readOnly
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Time</label>
                    <input
                      type='text'
                      value={time}
                      readOnly
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Name</label>
                    <input
                      type='text'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                      type='email'
                      required
                      value={fromemail}
                      onChange={(e) => setEmail(e.target.value)}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Phone</label>
                    <input
                      type='tel'
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm'
                    />
                  </div>
                </div>
                <div className='flex mt-4 justify-around'>
                  <button
                    onClick={modalHandler}
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                  >
                    Continue
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
