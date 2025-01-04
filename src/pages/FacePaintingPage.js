import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

// Custom Right Arrow
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const FacePaintingPage = () => {
  const images = [
    { id: 1, src: "https://via.placeholder.com/400x300", alt: "Face Paint 1" },
    { id: 2, src: "https://via.placeholder.com/400x300", alt: "Face Paint 2" },
    { id: 3, src: "https://via.placeholder.com/400x300", alt: "Face Paint 3" },
    { id: 4, src: "https://via.placeholder.com/400x300", alt: "Face Paint 4" },
    { id: 5, src: "https://via.placeholder.com/400x300", alt: "Face Paint 5" },
    { id: 6, src: "https://via.placeholder.com/400x300", alt: "Face Paint 6" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-red-300 mb-10">Face Painting</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Add a magical touch to your event with our professional face painting services. 
          We offer a wide range of designs to delight guests of all ages, ensuring a 
          colorful and memorable experience.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          Our face painters are skilled and experienced, and they can bring any 
          design to life, from cute animals to enchanted princesses.
        </p>

        {/* Carousel Section */}
        <div className="mt-10 relative">
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id} className="px-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-lg mx-auto w-full max-h-72 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FacePaintingPage;
