
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaClock, FaMapMarkerAlt,  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-[#F3F3F3] mt-5">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center flex-col justify-center text-center">
                <img src='https://i.ibb.co/d2pvBM8/icon.png' className="w-12" alt="DocHouse Logo" />
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-purple-300 font-bold">Doc</span>
                    <span className="text-2xl text-blue-500 font-bold">House</span>
                  </div>
                  <p className="text-sm p-3 max-w-xs">
                    Your trusted partner in comprehensive dental care. We are dedicated to providing you and your family with the highest quality dental services in a comfortable and welcoming environment. Trust us to treat you like family.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-1">
                <li><a rel="noopener noreferrer" href="#">About Us</a></li>
                <li><a rel="noopener noreferrer" href="#">Service</a></li>
                <li><a rel="noopener noreferrer" href="#">Doctors</a></li>
                <li><a rel="noopener noreferrer" href="#">Departments</a></li>
                <li><a rel="noopener noreferrer" href="#">Online Payment</a></li>
                <li><a rel="noopener noreferrer" href="#">Contact Us</a></li>
                <li><a rel="noopener noreferrer" href="#">My Account</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 text-lg font-bold">Doc House Services</h3>
              <ul className="space-y-1">
                <li><a rel="noopener noreferrer" href="#">Pediatric Clinic</a></li>
                <li><a rel="noopener noreferrer" href="#">Diagnosis Clinic</a></li>
                <li><a rel="noopener noreferrer" href="#">Cardiac Clinic</a></li>
                <li><a rel="noopener noreferrer" href="#">Laboratory Analysis</a></li>
                <li><a rel="noopener noreferrer" href="#">Personal Counseling</a></li>
                <li><a rel="noopener noreferrer" href="#">Gynecological Clinic</a></li>
                <li><a rel="noopener noreferrer" href="#">Dental Clinic</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 text-lg font-bold">Working Hours</h3>
              <ul className="space-y-1">
                <li><FaClock className="inline mr-2"/> Monday - 10 am to 7 pm</li>
                <li><FaClock className="inline mr-2"/> Tuesday - 10 am to 7 pm</li>
                <li><FaClock className="inline mr-2"/> Wednesday - 10 am to 7 pm</li>
                <li><FaClock className="inline mr-2"/> Thursday - 10 am to 7 pm</li>
               
                <li><FaClock className="inline mr-2"/> Sunday - 10 am to 7 pm</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 text-lg font-bold ">Contact Us</h3>
              <div className="flex items-start space-x-2">
                <FaPhone className="text-gray-600 mt-1" />
                <span>+123-456-7890</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-gray-600 mt-1" />
                <span>123 Dental Street, Tooth City, Smile Country</span>
              </div>
              <div className="uppercase dark:text-gray-900 text-lg font-bold">Follow Us</div>
              <div className="flex space-x-3">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                  <FaFacebook className="w-5 h-5 fill-current text-blue-600" />
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                  <FaTwitter className="w-5 h-5 fill-current text-blue-400" />
                </a>
                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                  <FaInstagram className="w-5 h-5 fill-current text-pink-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 2024 All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
