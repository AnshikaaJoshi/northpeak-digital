import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
        <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-20">    
          <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-blue-600 font-semibold text-lg mb-3">
            🚀 Welcome to NorthPeak Digital
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow Your Business With
          <span className="text-blue-600"> Modern Digital Solutions</span>
          </h1>

          <p className="text-gray-800 text-lg mt-6">
            We create stunning websites, mobile applications,
            and digital experiences that help businesses attract
            more customers and increase revenue.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg">
                    Get Started
                    <FaArrowRight />
            </button>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
            </span>

            <p className="text-gray-700">
              Trusted by <span className="font-bold">500+</span> Businesses
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
          src="/hero.webp"
          alt="Business team collaborating in a modern office"
          width="1200"
          height="700"
          decoding="async"
          className="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;