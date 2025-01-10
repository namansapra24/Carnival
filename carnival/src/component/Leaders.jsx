import React from "react";

// Reusable Image Design Component
const MemberImage = ({ name, imgSrc, designation }) => (
  <div className="flex flex-col items-center">
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
  </div>
);

export default function Committee() {
  return (
    <div className="py-16 px-10 h-screen bg-cover relative bg-[url('/img/bg6.jpg')]">
      {/* White Overlay with 60% opacity filter blur-[5px] */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Title with rounded yellow box */}
      <div className="text-center mt-10 relative">
        <h2 className="text-6xl font-extrabold uppercase text-yellow-800 inline-block rounded-lg">
          Leaders
        </h2>
      </div>

      {/* Committee Members */}
      <div className="flex justify-center gap-16 pt-20 relative">
        {/* Sudhir Lature */}
        <MemberImage
          name="Sudhir Lature"
          imgSrc="/img/sudhir-lature.jpg"
          designation="District Governor"
        />

        {/* PDG Deepak Pophale */}
        <MemberImage
          name="PDG Deepak Pophale"
          imgSrc="/img/deepak-pophale.jpeg"
          designation="Conference Chairman"
        />
      </div>
    </div>
  );
}
