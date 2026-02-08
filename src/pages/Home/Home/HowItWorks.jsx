import { TbTruckDelivery } from "react-icons/tb"; // Example icon

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <TbTruckDelivery className="text-4xl text-emerald-900" />,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <TbTruckDelivery className="text-4xl text-emerald-900" />,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <TbTruckDelivery className="text-4xl text-emerald-900" />,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <TbTruckDelivery className="text-4xl text-emerald-900" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900 mb-10 px-2">How it Works</h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="card bg-white shadow-sm rounded-2xl p-8 transition-all hover:shadow-md border border-transparent hover:border-emerald-100"
            >
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;