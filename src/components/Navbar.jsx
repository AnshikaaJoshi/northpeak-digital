import { useState } from "react";
import { FaMountain, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaMountain className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold">NorthPeak</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <a href="#home" className="block py-2">Home</a>
          <a href="#services" className="block py-2">Services</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#testimonials" className="block py-2">Testimonials</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;