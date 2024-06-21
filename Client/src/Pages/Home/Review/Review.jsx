// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import reviews from '../../../../public/review.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './review.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Review() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">What Our Patients Says</h1>
      <p className='text-center font-medium text-xl p-5'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper swiper-re"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-slide">
              <img src={review.image} alt={review.name} className="review-imag rounded-full" />
              <h3 className="review-name">{review.name}</h3>
              <p className="review-text">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
