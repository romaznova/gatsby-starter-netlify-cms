import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Img from "gatsby-image";
import SwiperCore, {
  Autoplay,
  A11y,
  EffectFade,
  Parallax,
  Pagination,
} from "swiper";
import { SCREEN } from "../../styles";
SwiperCore.use([Autoplay, A11y, Parallax, Pagination]);

const HeroComponent = styled.div`
  display: block;
  width: 100%;
  position: relative;
  height: 752px;
  background-size: cover;
  color: #333;
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImage }) => bgImage};

  &::after {
    display: block;
    content: "";
    width: 100%;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
    height: 100%;
    width: 100%;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
  .title,
  .description {
    color: #333;
    font-size: 30px;
    padding: 5px 20px;
    margin: 0;
  }
  .description {
    font-size: 18px;
  }
  .image-holder {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
  }
  .image {
    width: 100%;
    height: 100%;
  }

  .button {
    width: 240px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.9);
    color: #fff;
    background-color: #27ae60;
    border: none;
    margin: 20px;
    font-size: 22px;
    text-transform: uppercase;
  }

  ${SCREEN.L_DOWN} {
    height: 580px;
    .title {
      font-size: 26px;
    }
  }

  ${SCREEN.TL_DOWN} {
    height: 500px;
    .title {
      font-size: 24px;
    }
  }

  ${SCREEN.TP_DOWN} {
    .box {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      top: auto;
      height: auto;
      background-color: rgba(255, 255, 255, 0.4);
    }

    .image-holder {
      width: 100%;
    }

    .title {
      text-align: center;
      font-size: 20px;
    }
  }

  .swiper-container,
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    position: relative;
    height: 100%;
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
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
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
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-container-pointer-events {
    touch-action: pan-y;
  }
  .swiper-container-pointer-events.swiper-container-vertical {
    touch-action: pan-x;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /* Bullets */
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0.2;
    margin: 0 2px;
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

const Hero = ({ image, title, color: bgColor, bgImage }) => {
  return (
    <>
      <HeroComponent bgColor={bgColor} bgImage={bgImage}>
        <Swiper
          parallax={true}
          autoplay={{ delay: 5000 }}
          speed={1500}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="container l-layout">
              <section className="box" data-swiper-parallax-opacity="-2">
                <h2 className="title">Summer sale stylish</h2>
                <h3 className="description">
                  Summer sale stylish Summer sale stylish
                </h3>
                <button className="button">try it</button>
              </section>
              <div className="image-holder">
                <Img
                  className="image"
                  fluid={image.childImageSharp.fluid}
                  alt={`Image ${title}`}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container l-layout">
              <section className="box" data-swiper-parallax-opacity="-2">
                <h2 className="title">Summer sale stylish</h2>
                <h3 className="description">
                  Summer sale stylish Summer sale stylish
                </h3>
                <button className="button">try it</button>
              </section>
              <div className="image-holder">
                <Img
                  className="image"
                  fluid={image.childImageSharp.fluid}
                  alt={`Image ${title}`}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </HeroComponent>
    </>
  );
};

export default Hero;
