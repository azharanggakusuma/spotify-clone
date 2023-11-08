// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="text-gray-400">
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
            <li>Communities</li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">For Artists</h4>
          <ul className="text-gray-400">
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Useful Links</h4>
          <ul className="text-gray-400">
            <li>Support</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
            <div className="rounded-full bg-secondary p-2.5">
              <FaFacebook />
            </div>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <div className="rounded-full bg-secondary p-2.5">
              <FaTwitter />
            </div>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <div className="rounded-full bg-secondary p-2.5">
              <FaInstagram />
            </div>
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Spotify Clone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
