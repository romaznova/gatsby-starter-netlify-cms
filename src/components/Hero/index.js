import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { ParallaxBanner } from "react-scroll-parallax";
import { SCREEN } from "../../styles";
import { Button } from "../../containers";

const HeroComponent = styled.div`
  display: block;
  width: 100%;
  position: relative;
  height: 752px;
  background-size: cover;
  color: #333;
  background-color: ${({ bgColor }) => bgColor};

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
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
  .title,
  .description {
    color: #fff;
    font-size: 40px;
    padding: 5px 20px;
    margin: 0;
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 1024px;
    opacity: 0.8;
    line-height: 1.5;
  }
  .description {
    font-size: 18px;
  }

  ${Button} {
    width: 300px;
    height: 50px;
    font-size: 18px;
  }

  ${SCREEN.L_DOWN} {
    height: 580px;
    .title {
      font-size: 36px;
    }
  }

  ${SCREEN.TL_DOWN} {
    height: 500px;
    .title {
      font-size: 30px;
    }
  }

  ${SCREEN.TP_DOWN} {
    .image-holder {
      width: 100%;
    }

    .title {
      text-align: center;
      font-size: 26px;
    }
  }
`;

const BgImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateY(${({ translateY }) => translateY});

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }

  .bg-image {
    width: 100%;
    height: 100%;
  }
`;

const Hero = ({ image, title, color: bgColor, bgImage }) => {
  const [translateY, setTranslateY] = React.useState("0px");
  //   const handleScroll = React.useCallback((e, a, i) => {
  //     const scrollY = window.scrollY;
  //     if (scrollY > 750) {
  //       return setTranslateY("750px");
  //     }
  //     return setTranslateY(`${window.scrollY}px`);
  //   }, []);
  //   React.useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   });
  return (
    <>
      <HeroComponent bgColor={bgColor} bgImage={bgImage}>
        <BgImage translateY={translateY}>
          <Img
            className="bg-image"
            fluid={image.childImageSharp.fluid}
            alt={`Image ${title}`}
          />
        </BgImage>
        <div className="box">
          <h1 className="title">{title}</h1>
          <p className="description">{title}</p>
          <Button>KNOW MORE</Button>
        </div>
      </HeroComponent>
    </>
  );
};

export default Hero;
