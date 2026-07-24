import { motion } from "framer-motion";
function Testimonials() {
  const testimonials = [
{
name:"Sarah",
company:"Bright Solutions",
review:"Amazing service!"
},
{
name:"David",
company:"TechNova",
review:"Professional team."
},
{
name:"Emily",
company:"SkyLabs",
review:"Highly recommended."
}
];
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              tabIndex={0}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer ">
        
              <h3 className="text-2xl font-bold mt-4">
                {testimonial.name}
              </h3>
              <p className="text-blue-600 font-medium">
                 {testimonial.company}
              </p>
              <p className="text-gray-700 mt-2">
                {testimonial.review}
              </p>
            </motion.div>
              ))}
          </div>


      </div>
    </section>
  );
}

export default Testimonials;