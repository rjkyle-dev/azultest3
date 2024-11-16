/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Try from "../../../assets/image/Carousel/The Ultimate Philippines Travel Guide_ Everything You Need to Know!.jpg";
import Logo from "../../../assets/logo.png";

// Custom BentoGrid component
const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
};

// Custom BentoGridItem component
const BentoGridItem = ({ title, description, header, icon, className }) => {
  return (
    <div
      className={`p-6 border dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-lg font-bold text-neutral-800 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-300 ${description}`">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4">{header}</div>
    </div>
  );
};

// Skeleton component
// const Skeleton = () => (
//   <div className="flex w-full h-24 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-800 to-neutral-100 dark:to-neutral-900"></div>
// );
const Skeleton = () => (
  <div className="flex w-full h-[150px] rounded-xl overflow-hidden ">
    <img
      src={Try} // Replace this with your desired image URL
      alt="Skeleton"
      className="w-full h-full object-cover"
    />
  </div>
);

const Davao = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);
const Panabo = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);
const Samal = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);
const Mati = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);
const Lupon = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);
const San_Isidro = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);
const Tarragona = () => (
  <h3 className="text-lg font-normal text-neutral-800 dark:text-white">Explore the birth of groundbreaking ideas and inventions.</h3>
);


// Items data with images
const items = [
  {
    title: "Davao City",
    description: <Davao />,
    header: <Skeleton />,
    icon: <img src={Logo} alt="Dawn of Innovation" className="rounded-full" />,
  },
  {
    title: "Samal Island",
    description: <Samal />,
    header: <Skeleton />,
    icon: <img src={Logo} alt="Digital Revolution" className="rounded-full" />,
  },
  {
    title: "Mati City",
    description: <Mati />,
    header: <Skeleton />,
    icon: <img src={Logo} alt="Art of Design" className="rounded-full" />,
  },
  {
    title: "Lupon",
    description:
      < Lupon />,
    header: <Skeleton />,
    icon: (
      <img src={Logo} alt="Power of Communication" className="rounded-full" />
    ),
  },
  {
    title: "Panabo City",
    description: <Panabo />,
    header: <Skeleton />,
    icon: (
      <img src={Logo} alt="Pursuit of Knowledge" className="rounded-full" />
    ),
  },
  {
    title: "San Isidro (Davao Oriental)",
    description: <San_Isidro />,
    header: <Skeleton />,
    icon: <img src={Logo} alt="Joy of Creation" className="rounded-full" />,
  },
  {
    title: "Tarragona",
    description: <Tarragona />,
    header: <Skeleton />,
    icon: <img src={Logo} alt="Spirit of Adventure" className="rounded-full" />,
  },
];

export function BentoGridDemo() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 dark:text-white font-sans">
        Coastal Area
      </h1>
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default BentoGridDemo;
