import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // For the phone icon
import final from "/img/final.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content - Using Flexbox for layout */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section (Logo) */}
          <div className="flex flex-col items-center md:space-x-6 mb-6 md:mb-0">
            {/* Logo */}
            <a href="#home">
              <img
                src={final} // Replace with your logo's actual path
                alt="Logo"
                className="h-32 w-32 mb-4 cursor-pointer"
              />
            </a>
          </div>

          {/* Middle Section (Quick Links) */}
          <div className="flex justify-center mb-6 md:mb-0">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-4 text-xl">
                {" "}
                {/* This will increase space between each Quick Link */}
                <li>
                  <a
                    href="#home"
                    className="hover:text-yellow-500 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-yellow-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="hover:text-yellow-500 transition duration-300"
                  >
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section (Contact Us) */}
          <div className="text-center md:text-right mb-6 md:mb-0">
            {/* Follow Us Section (Moved Here) */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-5">Follow Us</h3>
              <div className="flex space-x-6 justify-center md:justify-end">
                {" "}
                {/* Aligned to the right on larger screens */}
                <a
                  href="https://www.facebook.com/profile.php?id=61571468445885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-yellow-500 transition duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/carnival_dc2026?igsh=MTQwbnFwcTQ4MG1yMg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-yellow-500 transition duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.youtube.com/@Carnivaldc2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-yellow-500 transition duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
            <p className="text-xl">
              <span>Rtn Shashikant Morlawar</span>
            </p>
            <p className="text-xl">
              <FontAwesomeIcon icon={faPhone} className="inline mr-2" />
              +91 9890943539
            </p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-8 border-t-2 border-gray-700 pt-4">
          <p className="text-lg">
            &copy; 2026 Rotary District Conference. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
