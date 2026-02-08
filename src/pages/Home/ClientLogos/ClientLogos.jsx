import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";

const ClientLogos = () => {
  const logos = [
    { id: 1, name: "Casio", url: logo1 },
    { id: 2, name: "Amazon", url: logo2 },
    { id: 3, name: "Moonstar", url: logo3 },
    { id: 4, name: "Star+", url: logo4 },
    { id: 5, name: "StartPeople", url: logo5 },
    { id: 6, name: "Randstad", url: logo6 },
    { id: 7, name: "Partner", url: logo7 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-xl font-bold text-[#052c2c]">
          We've helped thousands of sales teams
        </h2>
      </div>

      <Marquee 
  gradient={true} 
  gradientWidth={100}
  speed={50}
  pauseOnHover={true}
  direction="left"
>
  {logos.map((logo) => (
    /* mx-[50px] on both sides creates a total of 100px gap between logos */
    <div key={logo.id} className="mx-12.5">
      <img
        src={logo.url}
        alt={logo.name}
        /* h-[24px] for exact height precision */
        className="h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer object-contain"
      />
    </div>
  ))}
</Marquee>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="border-t border-dashed border-gray-300 w-full opacity-50"></div>
      </div>
    </section>
  );
};

export default ClientLogos;