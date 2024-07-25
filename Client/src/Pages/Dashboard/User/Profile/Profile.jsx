import useAuth from '../../../../Hooks/useAuth';
import useRole from '../../../../Hooks/useRole';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';

const Profile = () => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  console.log(user, role)
  console.log(role)

  if (isLoading || loading) return <LoadingSpinner />;

  return (
    <div className='flex justify-center items-center '>
      <div className='bg-white shadow-xl rounded-3xl w-3/5 overflow-hidden'>
        <img
          alt='profile background'
          src='https://i.ibb.co/1rdSF8m/pexels-fr3nks-305565.jpg'
          className='w-full h-48 object-cover'
        />
        <div className='flex flex-col items-center p-6 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24 border-4 border-white shadow-md'
            />
          </a>

          <p className='p-2 px-4 mt-4 text-xs bg-purple-200 text-purple-800 rounded-full'>
            {role.toUpperCase()}
          </p>
          <p className='mt-2 text-2xl font-semibold text-gray-800'>
            User Id: {user?.uid}
          </p>
          <div className='w-full mt-6'>
            <div className='flex flex-col items-center text-sm text-gray-700'>
              <p className='flex flex-col items-center'>
                Name
                <span className='font-bold text-gray-900'>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col items-center mt-4'>
                Email
                <span className='font-bold text-gray-900'>{user?.email}</span>
              </p>

              <div className='mt-6 flex space-x-4'>
                <button className='px-6 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition duration-300'>
                  Update Profile
                </button>
                <button className='px-6 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600 transition duration-300'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
