import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Img from "gatsby-image";
import SwiperCore, { Autoplay, A11y } from "swiper";
SwiperCore.use([Autoplay, A11y]);

const HeroComponent = styled.div`
  display: block;
  width: 100%;
  position: relative;
  height: 752px;
  background-color: ${({ bgColor }) => bgColor};

  &::after {
    display: block;
    content: "";
    width: 100%;
    /* padding-bottom: 56.5%; */
  }

  .container {
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
  }
  .box {
    display: flex;
    align-items: center;
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
    font-size: 24px;
    padding: 40px;
    text-transform: uppercase;
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
`;

const Hero = ({ image, title, color: bgColor }) => {
  console.log({ image, title, bgColor });
  return (
    <HeroComponent bgColor={bgColor}>
      <div className="container l-layout">
        <section className="box">
          <h3 className="title">{title}</h3>
        </section>
        <div className="image-holder">
          <Img
            className="image"
            fluid={image.childImageSharp.fluid}
            alt={`Image ${title}`}
          />
        </div>
      </div>
    </HeroComponent>
  );
};

export default Hero;
