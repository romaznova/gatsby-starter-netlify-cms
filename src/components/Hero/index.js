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
  background-color: ${({ bgColor }) => bgColor};

  &::after {
    display: block;
    content: "";
    width: 100%;
    padding-bottom: 56.5%;
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .box {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .title,
  .description {
    color: #fff;
    font-size: 24px;
  }
  .description {
    font-size: 18px;
  }
  .image {
    position: absolute;
    width: 50%;
    height: 100%;
  }
`;

const Hero = ({ image, title, description, bgColor }) => {
  return (
    <HeroComponent bgColor={bgColor}>
      <div className="container">
        <section className="box">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </section>
        <Img
          className="image"
          fluid={image.childImageSharp.fluid}
          alt={`Image ${title}`}
        />
      </div>
    </HeroComponent>
  );
};

export default Hero;
