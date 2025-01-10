import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer motion

export default function Timer() {
  const targetDate = new Date("January 23, 2026 00:00:00 GMT+0000"); // Target date (January 23, 2026)
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State to handle visibility
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  // Function to calculate time difference
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    // If the target date is in the future, calculate the time remaining
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Time's up!
    }
  };

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the component is 30% visible
        if (entry.intersectionRatio >= 0.3) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.6, // 30% visibility
      }
    );

    if (timerRef.current) {
      observer.observe(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        observer.unobserve(timerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={timerRef} // Reference to the Timer container
      className="flex flex-col items-center justify-center text-white bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg -mt-[7rem] max-w-4xl mx-auto"
      initial={{ y: 100 }} // Initial position (off-screen at the top)
      animate={{ y: isVisible ? 0 : 100 }} // Move to the top when visible
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
    >
      <h1 className="text-4xl font-bold mb-6">Countdown to January 23, 2026</h1>
      <div className="flex space-x-4 text-6xl font-extrabold">
        <div className="flex flex-col items-center">
          <span className="text-yellow-800">{timeLeft.days}</span>
          <span className="text-xl">Days</span>
        </div>
        <span className="text-6xl">:</span> {/* Add colon separator */}
        <div className="flex flex-col items-center">
          <span className="text-yellow-800">{timeLeft.hours}</span>
          <span className="text-xl">Hours</span>
        </div>
        <span className="text-6xl">:</span> {/* Add colon separator */}
        <div className="flex flex-col items-center">
          <span className="text-yellow-800">{timeLeft.minutes}</span>
          <span className="text-xl">Minutes</span>
        </div>
        <span className="text-6xl">:</span> {/* Add colon separator */}
        <div className="flex flex-col items-center">
          <span className="text-yellow-800">{timeLeft.seconds}</span>
          <span className="text-xl">Seconds</span>
        </div>
      </div>
    </motion.div>
  );
}
