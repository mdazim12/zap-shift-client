import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Removed Pagination
import { FaQuoteLeft } from 'react-icons/fa';
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import testimonialIcon from "../../../assets/customer-top.png";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rasel Ahamed",
      role: "CEO",
      comment: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
      id: 2,
      name: "Awlad Hossin",
      role: "Senior Product Designer",
      comment: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
      id: 3,
      name: "Nasir Uddin",
      role: "CEO",
      comment: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
  ];

  return (
    <section className="py-20 bg-[#f3f4f6] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Illustration */}
        <div className="flex justify-center mb-6" data-aos="zoom-in">
          <img src={testimonialIcon} alt="Illustration" className="h-24 w-auto" />
        </div>

        {/* Header */}
        <h2 className="text-4xl font-bold text-[#052c2c] mb-4">What our customers are sayings</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Slider Container */}
        <div className="relative px-10">
          <Swiper
            modules={[Navigation, Autoplay]} // Pagination removed here
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: '.button-next',
              prevEl: '.button-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10" // Reduced padding as dots are gone
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                {({ isActive }) => (
                  <div className={`transition-all duration-500 p-10 rounded-[35px] text-left h-full flex flex-col justify-between border ${
                    isActive 
                    ? "bg-white shadow-xl scale-105 opacity-100 border-transparent" 
                    : "bg-white/40 opacity-40 scale-90 border-gray-200"
                  }`}>
                    <div>
                      <FaQuoteLeft className="text-4xl text-[#bef264] mb-6 opacity-50" />
                      <p className="text-gray-600 text-sm leading-relaxed mb-8">
                        {review.comment}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-dashed border-gray-300 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#052c2c]/10 "></div>
                      <div>
                        <h4 className="font-bold text-[#052c2c]">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls Only */}
          <div className="flex flex-col items-center mt-6">
            {/* Arrows */}
            <div className="flex gap-4">
              <button className="button-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#052c2c] hover:text-white transition-all">
                <MdOutlineArrowBack className="text-xl" />
              </button>
              <button className="button-next w-12 h-12 rounded-full bg-[#bef264] flex items-center justify-center hover:bg-[#a3d94d] transition-all">
                <MdOutlineArrowForward className="text-xl text-[#052c2c]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;