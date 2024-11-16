/* eslint-disable no-unused-vars */
import React from "react"
import email from "../../assets/icon/email.png";
import phone from "../../assets/icon/telephone.png";
import fb from "../../assets/icon/facebook.png";
import location from "../../assets/icon/travel.png";
const Footer = () => {
  return (
    <div className="container mx-auto h-auto mt-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        <div className="flex items-center">
          <img src={email} className="w-6 lg:w-8" alt="Email Icon" />
          <a
            href="#"
            className="ml-4 underline font-medium text-sm lg:text-base">
            azulcorp@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <img src={location} className="w-6 lg:w-8" alt="Location Icon" />
          <a
            href="#"
            className="ml-4 underline font-medium text-sm lg:text-base">
            Panabo City, Davao del Norte, Philippines
          </a>
        </div>
        <div className="flex items-center">
          <img src={phone} className="w-6 lg:w-8" alt="Phone Icon" />
          <a
            href="#"
            className="ml-4 underline font-medium text-sm lg:text-base">
            +63-902-690-6967
          </a>
        </div>
        <div className="flex items-center">
          <img src={fb} className="w-6 lg:w-8" alt="Facebook Icon" />
          <a
            href="#"
            className="ml-4 underline font-medium text-sm lg:text-base">
            AZUL Corps.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer
