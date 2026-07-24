import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch, FaBullhorn, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";
function Services() {
  const services = [
    {
      icon: <FaCode size={35} className="text-blue-600" />,
      title: "Web Development",
      desc: "Modern and responsive websites."
    },
    {
      icon: <FaMobileAlt size={35} className="text-blue-600" />,
      title: "App Development",
      desc: "Android & iOS applications."
    },
    {
      icon: <FaPaintBrush size={35} className="text-blue-600" />,
      title: "UI/UX Design",
      desc: "Beautiful user experiences."
    },
    {
      icon: <FaSearch size={35} className="text-blue-600" />,
      title: "SEO",
      desc: "Improve your Google ranking."
    },
    {
      icon: <FaBullhorn size={35} className="text-blue-600" />,
      title: "Digital Marketing",
      desc: "Reach more customers."
    },
    {
      icon: <FaCloud size={35} className="text-blue-600" />,
      title: "Cloud Services",
      desc: "Scalable cloud solutions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
            tabIndex={0}
            key={service.title}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer ">
        
              {service.icon}
              <h3 className="text-2xl font-semibold mt-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2">
                {service.desc}
              </p>
          </motion.div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;