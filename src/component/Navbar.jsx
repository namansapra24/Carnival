import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import react-scroll's Link component

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to toggle navbar styles
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full p-6 transition-all duration-100 ease-in-out z-10 ${
        isScrolled
          ? "bg-opacity-90 backdrop-blur-lg py-3"
          : "bg-black bg-opacity-50 backdrop-blur-none py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center -my-5">
        {/* Logo */}
        <motion.div
          className="text-white font-bold"
          initial={{ scale: 1 }}
          animate={{ scale: isScrolled ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">
            <img
              src="/img/final.png"
              alt="Logo"
              className={`h-[8rem] ${isScrolled ? "h-12" : "h-[8rem]"}`}
            />
          </a>
        </motion.div>

        {/* Center Text (CARNIVAL 2026) */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-ramaraja text-center text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">CARNIVAL </span>
          <span className="text-yellow-800">2026</span>
        </motion.div>

        {/* Navigation Menu */}
        <motion.div
          className={`space-x-8 text-white font-bold flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? "space-x-4" : "space-x-8"
          }`}
        >
          {/* Home Button */}
          <Link
            to="home"
            smooth={true} // Enables smooth scrolling
            duration={500} // Duration of scroll
            offset={-70} // Offset for better visibility of the section
            className="hover:text-gray-600 text-lg cursor-pointer"
          >
            Home
          </Link>

          {/* About Button */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-600 text-lg cursor-pointer"
          >
            About
          </Link>

          {/* Schedule Button */}
          <Link
            to="schedule"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-600 text-lg cursor-pointer"
          >
            Schedule
          </Link>

          {/* Register Button */}
          <Link
            to="register"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition duration-300"
          >
            Register
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}