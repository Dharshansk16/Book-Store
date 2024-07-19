import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4500,
    cssEase: "linear",
  };
  return (
    <div className="slider-container h-72">
      <Slider {...settings}>
        <div className="h-72">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="..components/../src/assets/bookStoreAuthors/Yuval_Noah_Harari.webp"
            alt="loading"
          />
        </div>
        <div className="h-72">
          {" "}
          <img
            className="object-cover w-full h-full rounded-lg"
            src="..components/../src/assets/bookStoreAuthors/James_clear.webp"
            alt="loading"
          />
        </div>
        <div className="h-72">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="..components/../src/assets/bookStoreAuthors/Albert_Einstein.webp"
            alt="loading"
          />
        </div>
        <div className="h-72">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="..components/../src/assets/bookStoreAuthors/Carlo_Rovelli.jpg"
            alt="loading"
          />
        </div>
        <div className="h-72">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="..components/../src/assets/bookStoreAuthors/Joe_Navarro.png"
            alt="loading"
          />
        </div>
        <div className="h-72">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="..components/../src/assets/bookStoreAuthors/Morgan_Housel.webp"
            alt="loading"
          />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
