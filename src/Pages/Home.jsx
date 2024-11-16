/* eslint-disable no-unused-vars */
// import React from "react";

// import NatureVid from "../assets/video/ocean.mp4";
// import Hero from "../components/Hero/Hero";



// const Home = () => {
//   // const [orderPopup, setOrderPopup] = React.useState(false);

//   // const handleOrderPopup = () => {
//   //   setOrderPopup(!orderPopup);
//   // };
//   return (
//     <>
//     <div>
      
//         <div className=" h-[700px] relative">
//           <video
//             autoPlay
//             loop
//             muted
//             className="absolute right-0 top-0 w-full object-cover z-[-1]">
//             <source src={NatureVid} type="video/mp4" />
//           </video>
//           <Hero />
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default Home;

import React from "react";
import NatureVid from "../assets/video/ocean.mp4";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[400px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 w-full object-cover z-[-1]">
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
      </div>
      
    </>
  );
};

export default Home;

