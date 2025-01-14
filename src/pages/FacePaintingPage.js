import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dynamically import all images from the facepaint folder
const importAll = (r) => r.keys().map((key, index) => ({ id: index + 1, src: r(key), alt: `Face Paint ${index + 1}` }));
const facepaintImages = importAll(require.context('../assets/images/facepaint', false, /\.(png|jpe?g|svg)$/));

// Custom Right Arrow
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        zIndex: 2,
        background: "#fca5a5",
      }}
      onClick={onClick}
    />
  );
};

// Custom Left Arrow
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fca5a5",
        borderRadius: "50%",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const FacePaintingPage = () => {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(facepaintImages); // Log the imported images to verify paths

  return (
    <section className="py-16 px-6 bg-gray-100">
      <style>
        {`
          @media (max-width: 600px) {
            .slick-prev,
            .slick-next {
              display: none !important;
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-red-300 mb-10">Face Painting</h1>
        <Slider {...settings}>
          {facepaintImages.map((image) => (
            <div className='px-6 py-14'> 
              <div key={image.id} className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-64">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FacePaintingPage;