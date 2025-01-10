import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import sudhir from "/img/sudhir-lature.jpg";
import deepak from "/img/deepak-pophale.jpeg";

// Reusable Image Design Component
const MemberImage = ({ name, imgSrc, designation }) => {
  const [isInView, setIsInView] = useState(false);

  // Function to check the visibility of an element
  const handleScroll = () => {
    const element = document.getElementById(name); // Get the element by its name (or id)
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.7) {
      setIsInView(true); // If 30% of the element is visible, trigger animation
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id={name} // Set unique id for each member
      initial={{ x: -100, opacity: 0 }} // Initial state: Off to the left and invisible
      animate={{
        x: isInView ? 0 : -100, // Move to the original position when in view
        opacity: isInView ? 1 : 0, // Fade in when in view
        transition: { duration: 1, ease: "easeOut" },
      }}
      className="flex flex-col items-center"
    >
      <div className="w-[20rem] h-[20rem] rounded-full border-4 border-white shadow-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
      </div>
      {/* Name above the image */}
      <div className="text-center text-black text-2xl font-bold font-ramaraja py-10">
        <p className="text-3xl">{name}</p> {/* Name with white text and xl size */}
      </div>
      {/* Designation below the image */}
      <div className="text-center text-[#20468e] text-2xl -my-10">
        <p className="">{designation}</p> {/* Underlined designation */}
      </div>
    </motion.div>
  );
};

export default function Committee() {
  const [titleInView, setTitleInView] = useState(false);

  // Function to check if the title is in view
  const handleScroll = () => {
    const title = document.getElementById("title"); // Get the title by its id
    const rect = title.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.3) {
      setTitleInView(true); // Trigger animation when 30% of the title is in view
    } else {
      setTitleInView(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-16 px-10 h-screen bg-cover relative bg-[url('/img/bg6.jpg')]">
      {/* White Overlay with 60% opacity filter blur-[5px] */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Title with rounded yellow box */}
      <motion.div
        id="title" // Set id to target title element
        initial={{ opacity: 0 }} // Start with the title hidden
        animate={{
          opacity: titleInView ? 1 : 0, // Fade in when title is 30% in view
          transition: { duration: 1, ease: "easeOut" },
        }}
        className="text-center mt-10 relative"
      >
        <h2 className="text-6xl font-extrabold uppercase text-yellow-800 inline-block rounded-lg">
          Leaders
        </h2>
      </motion.div>

      {/* Committee Members */}
      <div className="flex justify-center gap-16 pt-20 relative">
        {/* Sudhir Lature */}
        <MemberImage
          name="Sudhir Lature"
          imgSrc={sudhir}
          designation="District Governor"
        />

        {/* PDG Deepak Pophale */}
        <MemberImage
          name="PDG Deepak Pophale"
          imgSrc={deepak}
          designation="Conference Chairman"
        />
      </div>
    </div>
  );
}
