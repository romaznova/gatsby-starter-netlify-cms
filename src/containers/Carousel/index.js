import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, A11y, EffectFade, Pagination } from "swiper";
import styled from "styled-components";
SwiperCore.use([Pagination]);

const CarouselComponent = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin: 2rem auto;
  max-width: 1280px;

  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0 0 1rem;
    /* Fix of Webkit flickering */
    z-index: 1;
    width: 100%;
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
  .carousel-title {
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 2.4rem;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin: 10px 0 0;
    .swiper-pagination-bullet {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      opacity: 0.4;
      background-color: #333;
      margin: 0 5px;
      transition: transform 100ms ease;
      cursor: pointer;

      &.swiper-pagination-bullet-active {
        opacity: 0.7;
        transform: scale(1.5);
        cursor: default;
      }
    }
  }
`;

export function Map(props) {
  return <React.Fragment>{props.items.map(props.children)}</React.Fragment>;
}

export const Carousel = ({
  slides = [],
  title = "Featured products",
  children,
}) => {
  return (
    <CarouselComponent>
      <h4 className="carousel-title">{title}</h4>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        breakpoints={{
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            {/* {children.bind(slide)} */}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </CarouselComponent>
  );
};
