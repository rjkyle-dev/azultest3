import React from "react";

const Feature = () => {
  return (
    <section id="features" className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 m:mt-9">
      <div className="flex items-center justify-center flex-col">
   
        <div className="container pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="text-center">
            <h1 className="text-blue-600 font-bold tracking-[0.22em] leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Why Choose Us
            </h1>
          </div>
          <div className="w-full md:w-3/4 lg:w-2/3 mx-auto mt-4">
            <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-[0.08em] text-justify">
              At T.I.D.E.S, we are dedicated to making a positive impact on
              marine ecosystems through technology-driven insights and
              resources. Our platform combines innovation with a deep commitment
              to sustainability and conservation, offering tools and information
              that empower users to explore, protect, and understand our oceans.
              With T.I.D.E.S, you're choosing a partner that values sustainable
              practices and aims to foster a greater appreciation for marine
              biodiversity. Join us in making a difference for our planet's blue
              heart.
            </p>
          </div>
        </div>

      
        <div className="container pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="text-center mb-6">
            <h2 className="text-blue-600 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.22em] pb-2">
              Key Features ...
            </h2>
          </div>

       
          <div className="mb-8">
            <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em]">
              Eco-Friendly Travel Tips
            </h3>
            <p className="bg-sky-200 text-black text-sm sm:text-base md:text-lg p-4 mt-3 rounded-lg leading-relaxed text-justify">
              Discover practical tips for eco-conscious travel along coastal
              regions. Our advice helps you minimize your environmental impact,
              protect delicate marine ecosystems, and ensure future generations
              can experience the beauty of the oceans.
            </p>
          </div>

          
          <div className="mb-8">
            <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em]">
              Weather Forecast
            </h3>
            <p className="bg-sky-200 text-black text-sm sm:text-base md:text-lg p-4 mt-3 rounded-lg leading-relaxed text-justify">
              Stay prepared with up-to-date weather forecasts tailored for
              coastal and marine regions. This feature provides critical
              information on conditions like tides, wind, and sea states to
              ensure safe, enjoyable coastal activities.
            </p>
          </div>

        
          <div className="mb-8">
            <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em]">
              Marine Species Gallery
            </h3>
            <p className="bg-sky-200 text-black text-sm sm:text-base md:text-lg p-4 mt-3 rounded-lg leading-relaxed text-justify">
              Explore our interactives gallery featuring a diverse array of marine species found in coastal areas. Learn about their unique characteristics, habitats, and roles within the ecosystem. Each entry includes educational insights to help foster appreciation and awareness of marine biodiversity.
            </p>
          </div>

      
          <div className="mb-8">
            <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em]">
              Marine Conservation Program
            </h3>
            <p className="bg-sky-200 text-black text-sm sm:text-base md:text-lg p-4 mt-3 rounded-lg leading-relaxed text-justify">
              Engage with our Marine Conservation Program, designed to educated and certify individuals passionate about marine protection. This program offers valuable resources and hands-on opportunities to make a positive impact on ocean health.
            </p>
          </div>

        
          <div className="mb-8">
            <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em]">
              Merchandise Store
            </h3>
            <p className="bg-sky-200 text-black text-sm sm:text-base md:text-lg p-4 mt-3 rounded-lg leading-relaxed text-justify">
              Support our conservation efforts and show your commitment to marine preservation by purchasing from our Merchandise Store. Each item in our store is designed to promote and helps fund our conversation initiatives.
            </p>
          </div>
        </div>

        <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 mb-20">
          <button
            type="button"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg shadow-md">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
