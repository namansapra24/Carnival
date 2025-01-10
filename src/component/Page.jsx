import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // Import framer motion
import Timer from "./Timer";
import About from "./About";
import Committee from "./Committee";

export default function Page() {
  // State to manage the background image
  const [backgroundImage, setBackgroundImage] = useState("/img/bg7.jpg");

  // Change the background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === "/img/bg7.jpg" ? "/img/bg8.jpg" : "/img/bg7.jpg"
      );
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="min-h-screen w-full">
      {/* Page Header */}
      <header
        className="text-center text-white h-screen justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transition: "background-image 1s ease-in-out", // Smooth transition for background image
        }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-cover bg-opacity-50">
          {/* Date Animation */}
          <motion.p
            className="text-4xl text-yellow-800 pb-8 font-extrabold font-ramaraja"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            23 - 25 January, 2026
          </motion.p>

          {/* Title and Location Animation */}
          <div className="flex flex-col items-center">
            <motion.h1
              className="text-8xl font-bold font-ramaraja mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              CARNIVAL
            </motion.h1>
            <motion.p
              className="text-3xl text-white font-extrabold font-ramaraja mt-2 mb-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#F9A825" }}
                className="mr-2"
              />
              Ravindra Bhavan, Margao,{" "}
              <span className="text-yellow-800">Goa</span>
            </motion.p>
          </div>

          {/* Register Button Animation */}
          <motion.a
            href="#register"
            className="bg-yellow-800 text-white py-3 px-6 rounded-lg text-xl font-bold transition duration-300 ease-in-out hover:bg-yellow-900 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            Register Now
          </motion.a>
        </div>
      </header>

      <Timer />
      <About />
      <Committee />
    </div>
  );
}
