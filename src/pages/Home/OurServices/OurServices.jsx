import { 
  TbTruckDelivery, 
  TbMap2, 
  TbPackages, 
  TbCash, 
  TbBuildingSkyscraper, 
  TbRotateClockwise2 
} from "react-icons/tb"; // Corrected import path

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours.",
      icon: <TbTruckDelivery />,
    },
    {
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      icon: <TbMap2 />,
    },
    {
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <TbPackages />,
    },
    {
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <TbCash />,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <TbBuildingSkyscraper />,
    },
    {
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <TbRotateClockwise2 />,
    },
  ];

  return (
    <section className="bg-[#052c2c] py-20 px-6 rounded-[40px] m-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <header className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </header>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card p-10 rounded-[35px] bg-white text-[#052c2c] transition-all duration-500 hover:bg-[#bef264] cursor-pointer shadow-xl"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-[#f0f9ff] transition-all duration-500 group-hover:bg-white/60 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-5 leading-tight transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-[#052c2c]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;