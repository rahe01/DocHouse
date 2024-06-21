// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./review.css";
import review from "../../../../public/review.json";

// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch review data (in a real-world scenario, you might fetch this data from an API)
    setReviews(review);
  }, []);

  return (
    <div className="my-5 md:my-10">
       <h1 className="text-4xl font-bold text-center my-2 mt-3 md:text-4xl">
        What Our Patients Say
      </h1>

      <div className="p-2 md:p-4">
        <p className="text-sm leading-relaxed mb-4 sm:text-xl text-center">
          Our patients rave about our exceptional dental care. From personalized
          treatments to a comforting environment, we prioritize your oral health
          and satisfaction.
        </p>
      </div>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        slidesPerView={1} // Default to 1 slide
        spaceBetween={30} // Add space between slides
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper swiper-review"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/TLsrSc5/pexels-padrinan-806427.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-between p-8 bg-white rounded-lg shadow-md">
              <div className="flex flex-col w-2/3">
                <div
                  className="text-xl text-start font-bold mb-2"
                  data-swiper-parallax="-300"
                >
                  {review.name}
                </div>
                <div className="text-start mb-4" data-swiper-parallax="-100">
                  <p>{review.review}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((star, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
