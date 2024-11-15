import React from "react";
import Heroimage from "../../assets/image/caroousel.jpg";
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  return (
    <section id="home" className="h-[450px] w-full">
      <div className="relative bottom-16 w-full xl:h-[655px] lg:h-[255px] sm:h-[800px] bg-black/20">
        <div className="flex flex-col md:flex-row justify-center items-center p-6 sm:gap-36">
          <div className="container grid grid-cols-1 gap-4 mb-20 sm:mb-32 md:mb-44 sm:mt-20 relative">
            <div className="w-full xl:absolute xl:top-[-50px] xl:left-[8rem] lg:left-5 lg:top-[70px] m:mt-[90px] ">
              <div className=" text-white px-4 sm:px-10  md:px-12 lg:px-10 xl:px-24 xl:mt-[-170px]  md:top-[-40px] relative xl:left-[-100px] lg:left-[50px]">
                <h1
                  data-aos="fade-up"
                  className="text-blue-700 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold xl:tracking-[0.40em] tracking-widest sm:text-sky-700 m:text-8xl m:ml-[3px] md:text-[10em] md:ml-[70px]">
                  TIDES
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="font-bold text-lg sm:text-xl xl:text-2xl text-white font-serif mt-4 sm:mt-6 xl:ml-[75px] xl:w-[120%] md:w-[600px] md:text-center lg:ml-[-100px] m:w-[400px]">
                  <q className="tracking-widest m:ml-[-5px]">
                    Explore Discover Conserve
                  </q>
                </p>

                <p className="leading-relaxed  mt-4 sm:mt-6 xl:w-[120%] tracking-wide font-sans text-sm sm:text-lg xl:text-xl xl:ml-[75px] md:w-[600px] md:top-[300px] text-justify md:text-justify lg:w-[450px]">
                  Technology for Intelligent Detection of Ecosystem Species is a
                  cutting-edge system that uses advanced technology to track and
                  identify marine species in their natural ecosystem. Empowering
                  conservation efforts, TIDES supports sustainable ocean
                  management and fosters a deeper understanding of marine
                  biodiversity. Dive into a better future with TIDES!
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

          {/* <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 lg:left-[-70px] lg:top-[70px] xl:top-[120px]">
            <div className="flex justify-center items-center m:mt-[-40px]">
              <img
                src={Heroimage}
                alt="Hero"
                className="h-80 xl:h-[30rem] w-full object-cover border-2 border-gray-800 rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer"
              />
            </div>
          </div> */}

          <section
            id="home"
            className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <div
              className="relative w-full 
      m:w-[90%] sm:w-3/4 md:w-[450px] lg:w-2/5 xl:w-[60%] md:left-[-125px]
      m:left-0 sm:left-0 lg:left-[100px] lg:top-[70px] xl:top-[120px] xl:left-[50px] mx-auto md:top-[400px]">
              <div className="flex justify-center items-center m:mt-[-20px] sm:mt-[-30px]">
                <Carousel
                  className="h-[200px] m:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] xl:w-[620px] 
        w-full rounded-[20px]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
