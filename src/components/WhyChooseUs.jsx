import { FaCheckCircle } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    "Experienced Team",
    "Fast Delivery",
    "Modern Technologies",
    "24/7 Customer Support",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaCheckCircle className="text-green-500 text-3xl" />
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;