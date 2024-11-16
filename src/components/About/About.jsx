/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Concha from "../../assets/team-profile/Philip.jpeg";
import Nigas from "../../assets/team-profile/ÑIGAS,ENJE A ..jpg";
import Selle from "../../assets/team-profile/JheANn.jpg";
import Kyle from "../../assets/team-profile/kyle.jpg";
import Footer from "../../components/Footer/Footer";


const About = () => {
  return (
    <>
      <section
        id="features"
        className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-screen h-auto relative mb-56">
        {/* Intro Section */}
        <div className="flex mt-28">
          <div className="container pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <div className="text-center">
              <h1 className="text-blue-600 font-bold tracking-[0.12em] leading-tight text-3xl sm:text-6xl md:text-7xl lg:text-9xl lg:absolute lg:top-[-30px]">
                Who We Are
              </h1>
            </div>
            <div className="md:w-3/4 lg:w-[70%] mx-auto mt-4 lg:mt-12 lg:ml-[10px]">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-[0.02em] text-justify">
                At T.I.D.E.S, we are dedicated to making a positive impact on
                marine ecosystems through technology-driven insights and
                resources. Our platform combines innovation with a deep
                commitment to sustainability and conservation, offering tools
                and information that empower users to explore, protect, and
                understand our oceans. With T.I.D.E.S, you're choosing a partner
                that values sustainable practices and aims to foster a greater
                appreciation for marine biodiversity. Join us in making a
                difference for our planet's blue heart.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full mt-24 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CEO Profile */}
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[220px] rounded-lg z-0 text-center">
                <h1 className="text-2xl font-bold text-blue-800 mt-16 tracking-widest">
                  CEO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  src={Concha}
                  alt="Concha"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* COO Profile */}
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[220px] rounded-lg z-0 text-center">
                <h1 className="text-2xl font-bold text-blue-800 mt-16 tracking-widest">
                  COO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  src={Nigas}
                  alt="Nigas"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* CMO Profile */}
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[220px] rounded-lg z-0 text-center">
                <h1 className="text-2xl font-bold text-blue-800 mt-16 tracking-widest">
                  CMO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  src={Selle}
                  alt="Selle"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* CTO Profile */}
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[220px] rounded-lg z-0 text-center">
                <h1 className="text-2xl font-bold text-blue-800 mt-16 tracking-widest">
                  CTO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  src={Kyle}
                  alt="Kyle"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto h-auto mt-[250px] mb-10 px-4 ml-[10em]">
        <Footer />
      </section>
    </>
  );
};

export default About;
