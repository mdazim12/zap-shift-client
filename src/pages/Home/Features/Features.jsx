import trackImg from "../../../assets/live-tracking.png"
import safeImg from "../../../assets/safe-delivery.png";
import supportImg from "../../../assets/safe-delivery.png";

const Features = () => {
  const featureData = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      img: trackImg,
    },
    {
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      img: safeImg,
    },
    {
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      img: supportImg,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {featureData.map((item, index) => (
          <div
            key={index}
            // Logic: slide up, staggered delay based on index
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
            className="flex flex-col md:flex-row items-center bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 transition-transform duration-300 hover:shadow-md"
          >
            {/* Image Container with Zoom effect */}
            <div 
              className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
              data-aos="zoom-in"
              data-aos-delay={(index * 150) + 100}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 md:h-52 w-auto object-contain"
              />
            </div>

            {/* Vertical Divider (Hidden on Mobile) */}
            <div className="hidden md:block w-px h-32 bg-dashed border-l border-dashed border-gray-300 mx-12"></div>

            {/* Text Content with Slide-left effect */}
            <div 
              className="w-full md:w-2/3 text-center md:text-left"
              data-aos="fade-left"
              data-aos-delay={(index * 150) + 200}
            >
              <h3 className="text-2xl font-bold text-[#052c2c] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Dashed Line */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-t border-dashed border-gray-300 w-full opacity-40"></div>
      </div>
    </section>
  );
};

export default Features;