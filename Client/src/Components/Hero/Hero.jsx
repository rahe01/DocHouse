// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-5 lg:my-10"
      >
        <SwiperSlide>
          <div className="rounded-2xl bg-[url('https://i.ibb.co/SRw1p6c/pexels-n-voitkevich-5863397.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center">
            <div className="bg-white bg-opacity-70 p-6 md:p-12 lg:p-16 max-w-lg mx-auto rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">Welcome to Dochouse</h1>
              <p className="text-sm md:text-lg lg:text-xl text-black mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque laudantium modi iure ad ratione illo rerum suscipit quis minus blanditiis, hic ipsam ea nobis minima, aspernatur nihil provident harum.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-2xl bg-[url('https://i.ibb.co/nfTVZfp/pexels-artempodrez-5878516.jpg')] w-full h-screen bg-cover bg-no-repeat bg-center flex items-center">
            <div className="bg-white bg-opacity-70 p-6 md:p-12 lg:p-16 max-w-lg mx-auto rounded-lg shadow-lg">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">Welcome to Dochouse</h1>
              <p className="text-sm md:text-lg lg:text-xl text-black mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque laudantium modi iure ad ratione illo rerum suscipit quis minus blanditiis, hic ipsam ea nobis minima, aspernatur nihil provident harum.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
