import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Img from "gatsby-image";
// import styles from "./styles.css";

// Import Swiper styles
// import "swiper/swiper.scss";
const HeroComponent = styled.div`
  display: block;
  width: 100%;
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 100%;
    padding-bottom: 56.5%;
  }

  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .slide-box {
    max-width: 800px;
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .slide-title,
  .slide-description {
    color: #fff;
    font-size: 24px;
  }
  .slide-description {
    font-size: 18px;
  }
  .slide-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Hero = ({ slides }) => {
  return (
    <HeroComponent>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop="true"
      >
        {slides.map(({ title, description, image }, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <section className="slide-box">
              <h3 className="slide-title">{title}</h3>
              <p className="slide-description">{description}</p>
            </section>
            <Img
              className="slide-image"
              fluid={image.childImageSharp.fluid}
              alt={`Image ${title}`}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide> */}
      </Swiper>
    </HeroComponent>
  );
};

export default Hero;
