// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-1 lg:my-2"
      >
        <SwiperSlide>
          <div className="rounded-2xl bg-[url('https://i.ibb.co/2hgxgBQ/pexels-fr3nks-305568.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center">
            <div className="bg-white w-full h-full bg-opacity-70 p-6 md:p-12 lg:p-16 mx-auto rounded-lg shadow-lg flex items-center justify-center flex-col lg:flex-row">
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl  font-semibold mb-4 text-black">
                  Your Best Medical Help Center
                </h1>
                <p className="text-sm md:text-base lg:text-lg font-medium text-black mb-6">
                  At Dochouse, we provide comprehensive dental care with a focus
                  on your comfort and well-being. Our team of experienced
                  professionals uses the latest technology to ensure your smile
                  is healthy and beautiful.
                </p>
                <button className="btn btn-outline border-[#F7A582] hover:border-[#F7A582] hover:bg-[#F7A582] text-md text-[#F7A582] font-bold">
                  Get Started
                </button>
              </div>
              <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2">
                <div className="w-1/2">
                  <img
                    src="https://i.ibb.co/jG3S53L/pexels-iamluisao-12917374.jpg"
                    alt="Doctor"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-3xl border-4 border-white shadow-lg"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src="https://i.ibb.co/PD4MTkk/pexels-cedric-fauntleroy-4269355.jpg"
                    alt="Doctor"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-3xl border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl bg-[url('https://i.ibb.co/4pstVxw/pexels-pavel-danilyuk-6812475.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center">
            <div className="bg-white w-full h-full bg-opacity-70 p-6 md:p-12 lg:p-16 mx-auto items-center justify-center rounded-lg shadow-lg flex flex-col lg:flex-row">
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl  font-semibold mb-4 text-black">
                  Our Expert Team
                </h1>
                <p className="text-sm md:text-base lg:text-lg font-medium text-black mb-6">
                  Meet our team of dedicated dental professionals who are
                  committed to providing personalized care and advanced
                  treatment options. Your oral health is our top priority.
                </p>
                <button className="btn btn-outline border-[#F7A582] hover:border-[#F7A582] hover:bg-[#F7A582] text-md text-[#F7A582] font-bold">
                  Meet Our Team
                </button>
              </div>
              <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2">
                <div className="w-1/2">
                  <img
                    src="https://i.ibb.co/HDc6Pq6/pexels-cedric-fauntleroy-4270362.jpg"
                    alt="Doctor"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-3xl border-4 border-white shadow-lg"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src="https://i.ibb.co/2YpDbNs/pexels-shvetsa-3845736.jpg"
                    alt="Doctor"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-3xl border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
