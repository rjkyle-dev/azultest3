/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../../components/Footer/Footer";

import Carousel from "../Carousel/Carousel";
import BentoGridDemo from "../ui/Bento/Bento-grid-components";

const Hero = () => {
  return (
    <>
      <section id="home" className="h-[450px] w-full">
        <div className="relative bottom-16 w-full bg-black/20 md:h-[655px] sm:h-[800px] lg:h-[255px] xl:h-[90%]">
          <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-36">
            <div className="container grid grid-cols-1 gap-4 mb-20 sm:mb-32 md:mb-44 sm:mt-20 relative">
              <div className="w-full xl:absolute xl:top-[-50px] xl:left-[8rem] lg:left-5 lg:top-[70px] mt-[90px] ">
                <div className="text-white px-4 sm:px-10 md:px-12 lg:px-10 xl:px-24 xl:mt-[-170px] md:top-[-40px] relative xl:left-[-100px] xl:top-[70px] lg:left-[50px]">
                  <h1
                    data-aos="fade-up"
                    className="text-blue-700 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold xl:tracking-[0.40em] tracking-widest sm:text-sky-700 md:text-[10em] md:ml-[70px]">
                    TIDES
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="font-bold text-lg sm:text-xl xl:text-2xl text-white font-serif mt-4 sm:mt-6 xl:ml-[75px] xl:w-[120%] md:w-[600px] md:text-center lg:ml-[-100px] w-[400px]">
                    <q className="tracking-widest ml-[-5px]">
                      Explore Discover Conserve
                    </q>
                  </p>

                  <p className="leading-relaxed mt-4 sm:mt-6 xl:w-[120%] tracking-wide font-sans text-sm sm:text-lg xl:text-xl xl:ml-[75px] md:w-[600px] text-justify lg:w-[450px]">
                    Technology for Intelligent Detection of Ecosystem Species is
                    a cutting-edge system that uses advanced technology to track
                    and identify marine species in their natural ecosystem.
                    Empowering conservation efforts, TIDES supports sustainable
                    ocean management and fosters a deeper understanding of
                    marine biodiversity. Dive into a better future with TIDES!
                  </p>

                  <div className="mt-6 sm:mt-10 md:mt-[-1%] xl:ml-[75px]">
                    <button
                      type="button"
                      className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg px-6 py-2 text-sm sm:text-base shadow-md md:px-[80px] md:mt-5 md:w-[250px] md:py-3">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <section
              id="home"
              className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <div className="relative w-full sm:w-3/4 md:w-[450px] lg:w-[350px] xl:w-[70%] xl:top-[200px] mx-auto md:top-[400px] lg:top-[140px]">
                <div className="flex justify-center items-center sm:mt-[-30px] md:mt-[-20px]">
                  <Carousel className="h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[500px] xl:w-[620px] w-full rounded-[10px]" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="h-auto w-full mt-[500px]">
        <BentoGridDemo />
      </section>

      <section className="container mx-auto h-auto mt-[250px] mb-10 px-4 ml-[10em]">
        <Footer />
      </section>
    </>
  );
};

export default Hero;
