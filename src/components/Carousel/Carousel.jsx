import { useState, useEffect } from "react";
import Heroimage1 from "../../assets/image/Carousel/14dc8ced-bf2c-4bc1-a21e-386293def4bd.jpg";
import Heroimage2 from "../../assets/image/Carousel/Ecuador Creates New Marine Reserve North of Galápagos Islands.jpg";
import Heroimage3 from "../../assets/image/Carousel/The Ultimate Philippines Travel Guide_ Everything You Need to Know!.jpg";
import Heroimage4 from "../../assets/image/Carousel/🏝️ Discover the Enchanting Islands of the Philippines_ Tropical Paradises Await! 🌊 (1).jpg";

const slides = [
  { src: Heroimage1, alt: "Hero Image 1" },
  { src: Heroimage2, alt: "Hero Image 2" },
  { src: Heroimage3, alt: "Hero Image 3" },
  { src: Heroimage4, alt: "Hero Image 4" },
  { src: Heroimage1, alt: "Hero Image 5" },
];

const Carousel = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Slide Transition Logic
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 
              h-[200px] m:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] lg:w-[200px] xl:h-[500px]">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="p-2 ">
         
        </button>
        <button
          onClick={nextSlide}
          className="p-2 ">
         
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
