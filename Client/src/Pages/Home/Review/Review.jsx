import { useState, useEffect } from "react";

const testimonials = [
  {
    title: "Expertise and Compassion Combined",
    text: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    name: "Sarah D",
    occupation: "IT Professional",
    image: "https://i.ibb.co/k44nGbT/Ellipse-10.png",
    rating: "https://i.ibb.co/p3hLCwM/Frame-10.png",
  },
  {
    title: "Life-Saving Care, Life-Changing Experience",
    text: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
    name: "Michael R ",
    occupation: "Business Executive",
    image: "https://i.ibb.co/FDdpCvR/Ellipse-10-1.png",
    rating: "https://i.ibb.co/gjCGF3Y/Frame-10-1.png",
  },
  {
    title: "A Partner in Health and Wellness",
    text: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and wellness.",
    name: "David S",
    occupation: "Lawyer",
    image: "https://i.ibb.co/pbkfwkv/Ellipse-10-2.png",
    rating: "https://i.ibb.co/p3hLCwM/Frame-10.png",
  },
  // Add more testimonials as needed
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let slideInterval;

    if (!isHovered) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(slideInterval);
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative space-y-4 my-20 px-4 md:px-0"
    >
      <button className="btn rounded-3xl border btn-ghost border-black text-lg">
        Testimonial
      </button>
      <h1 className="text-4xl font-semibold text-center">
        What they say about us
      </h1>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentSlide * 100) / testimonials.length}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-auto bg-[#FFFFF5] rounded-3xl flex-shrink-0 w-full md:w-1/3 p-5 m-2"
            >
              <h1 className="font-semibold text-xl">{testimonial.title}</h1>
              <p>{testimonial.text}</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p>
                    <strong>{testimonial.name},</strong> {testimonial.occupation}
                  </p>
                  <img src={testimonial.rating} alt="rating" className="mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              currentSlide === index ? "bg-[#FFC637]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
