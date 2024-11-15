import React from "react";

import NatureVid from "../assets/video/ocean.mp4";
import Hero from "../components/Hero/Hero";



const Home = () => {
  // const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  return (
    <>
      <div className="relative top-[50px]">
        <div className=" h-full w-full">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[800px] xl:h-[600px] w-full object-cover z-[-1]">
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
