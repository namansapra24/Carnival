import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer motion

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.3) {
          setIsVisible(true); // Trigger animation when 30% of the component is visible
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // 30% visibility
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <motion.div id="about"
      ref={aboutRef} // Reference to the About container
      className="flex flex-col h-screen md:flex-row items-center justify-between py-16 px-[10rem] pb-[7rem] bg-black bg-opacity-10 -mt-[6.5rem]"
      initial={{ opacity: 0, y: 100 }} // Start off-screen
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }} // Fade in and slide up when visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      {/* Left Side */}
      <motion.div
        className="text-white md:w-1/2 pr-20 space-y-6 pt-[6rem]"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -100, // Slide in from left
        }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Delayed animation for left side content
      >
        <h2 className="text-yellow-800 text-3xl font-extrabold uppercase">About Event</h2>
        <h3 className="text-6xl pt-14 font-bold text-[#20468e]">
          Rotary District Conference <span className="text-yellow-800">2026</span>
        </h3>
        <p className="text-black text-xl leading-relaxed">
          Join us in the heart of coastal bliss—Goa—for an unforgettable Rotary District Conference at Ravindra Bhawan, Margao, on 23rd, 24th, and 25th of January 2025. Embrace the spirit of Connect, Collaborate, and Celebrate with fellow Rotarians in an event filled with inspiration, networking, and vibrant festivities. Don’t miss this chance to create lasting memories!
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : 100, // Slide in from right for image
        }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} // Delayed animation for image
      >
        <img
          src="/img/final2.png" // Replace with your image path
          alt="Rotary District Conference"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}
