import { MdArrowOutward } from "react-icons/md";

const FAQ = () => {
  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer: "Yes, our posture correctors are designed with adjustable straps to accommodate various body types and age groups comfortably.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer: "Absolutely. By keeping your spine aligned, it reduces the strain on your muscles and ligaments, which is a primary cause of back pain.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer: "Some of our premium models include smart sensors that vibrate gently when you slouch to remind you to correct your posture.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer: "You can sign up for our newsletter or enable notifications on the product page to receive an alert the moment stock is replenished.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 overflow-hidden rounded-4xl">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#052c2c] mb-4">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`collapse collapse-arrow bg-white rounded-xl border ${
                index === 0 ? "border-[#052c2c]/30 bg-[#f0fdfa]" : "border-transparent"
              } shadow-sm`}
            >
              {/* Using radio allows only one to be open at a time (Accordion) */}
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              
              <div className="collapse-title text-lg font-bold text-[#052c2c] py-5">
                {faq.question}
              </div>
              
              <div className="collapse-content">
                <div className="border-t border-gray-100 pt-4 pb-2">
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button matching Figma */}
        <div className="mt-12 flex justify-center items-center gap-0" data-aos="zoom-in">
          <button className="btn bg-[#bef264] hover:bg-[#a3d94d] border-none text-[#052c2c] font-bold px-8 rounded-l-full rounded-r-none h-14 normal-case text-lg">
            See More FAQ's
          </button>
          <div className="bg-[#1c2c2c] h-14 w-14 flex items-center justify-center rounded-full -ml-4 z-10 text-white cursor-pointer hover:bg-black transition-colors">
            <MdArrowOutward className="text-2xl" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;