import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { SCREEN } from "../../styles";

const GalleryComponent = styled.div`
  width: 100%;
  margin: 40px 0;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
      "left center right"
      "left bottom bottom";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .left {
    grid-area: left;
    background-color: #fff;
  }

  .bottom {
    grid-area: bottom;
    background-color: #fff;
  }

  .center {
    grid-area: center;
    background-color: #fff;
  }

  .right {
    grid-area: right;
    background-color: #fff;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  ${SCREEN.TP_DOWN} {
    &::after {
      padding-bottom: 100%;
    }
    .container {
      grid-gap: 5px;
    }
  }

  ${SCREEN.TP_DOWN} {
    &::after {
      padding-bottom: 100%;
    }
    .container {
      grid-template-areas:
        "left center"
        "right bottom";
      grid-template-columns: 1fr 1fr;
      grid-gap: 5px;
    }
  }
`;

const Gallery = (props) => {
  return (
    <GalleryComponent>
      <div className="container">
        <div className="left">
          <a href={props.imagesGrid.left.url}></a>
          <Img
            className="image"
            fluid={props.imagesGrid.left.image.childImageSharp.fluid}
            alt={`Image`}
          />
        </div>
        <div className="center">
          <a href={props.imagesGrid.center.url}></a>
          <Img
            className="image"
            fluid={props.imagesGrid.center.image.childImageSharp.fluid}
            alt={`Image `}
          />
        </div>
        <div className="right">
          <a href={props.imagesGrid.bottom.url}></a>
          <Img
            className="image"
            fluid={props.imagesGrid.bottom.image.childImageSharp.fluid}
            alt={`Image`}
          />
        </div>
        <div className="bottom">
          <a href={props.imagesGrid.right.url}></a>
          <Img
            className="image"
            fluid={props.imagesGrid.right.image.childImageSharp.fluid}
            alt={`Image`}
          />
        </div>
      </div>
    </GalleryComponent>
  );
};

export default Gallery;
