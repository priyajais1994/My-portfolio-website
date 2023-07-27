import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide >
          <a href="https://effervescent-brioche-74de9e.netlify.app/"> <h1 className="text-center "> Customer relationship management app  </h1>  </a>
          </SwiperSlide>

        <SwiperSlide>
        <a href="https://spectacular-babka-c33769.netlify.app/"> <h1 className="text-center "> Movie Booking Application  </h1>  </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Portfolio;
