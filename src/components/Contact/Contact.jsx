import React from "react";
import email from "../../assets/icon/email.png";
import phone from "../../assets/icon/telephone.png";
import fb from "../../assets/icon/facebook.png";
import location from "../../assets/icon/travel.png";

const Contact = () => {
  return (
    <section className="container mx-auto h-auto mt-20 m:mt-28 px-4">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 mt-8 lg:mt-24">
          <div className="font-bold">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-blue-500">
              Let's Talk
            </h1>
          </div>
          <div>
            <p className="text-sm sm:text-base lg:text-lg font-sans font-normal mt-4 text-justify">
              For any inquiries or collaboration opportunities, feel free to
              reach out to Azul Corporation. We're here to discuss how we can
              work together in shaping a sustainable future for our oceans.
              Contact us today and join the movement toward preserving marine
              life with innovative technology!
            </p>
          </div>
        </div>

     
        <div className="flex justify-center lg:justify-end">
          <div className="flex flex-col justify-center items-center gap-5 mt-10 lg:mt-10 bg-indigo-300 py-10 w-full sm:w-[400px] rounded-2xl">
            <div className="w-[90%]">
              <input
                type="text"
                placeholder="Name"
                className="outline-none w-full h-[40px] text-[15px] rounded-md px-4"
              />
            </div>
            <div className="w-[90%]">
              <input
                type="email"
                placeholder="Email"
                className="outline-none w-full h-[40px] text-[15px] rounded-md px-4"
              />
            </div>
            <div className="w-[90%]">
              <textarea
                cols="30"
                rows="6"
                placeholder="Message"
                className="outline-none w-full text-[15px] rounded-md px-4 py-2"
              />
            </div>
            <div className="w-[90%] text-center">
              <button className="w-full h-[40px] bg-blue-600 text-white rounded-md font-bold font-sans transition ease-in-out delay-100 hover:bg-blue-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    
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
    </section>
  );
};

export default Contact;
