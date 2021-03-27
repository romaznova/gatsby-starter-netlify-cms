import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ProductCardComponent = styled.div`
  .card {
    padding-bottom: 1px;
    border: 1px solid #ebedec;
  }
  .image {
    width: 100%;
    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  .btn {
    padding: 1rem;
    background-color: green;
    color: white;
    margin: 1rem auto;
    cursor: pointer;
    transition: transform 150ms ease;
    text-align: center;
    text-transform: uppercase;
    max-width: 150px;

    &:active {
      transform: scale(0.99);
    }
  }
  .title {
    font-size: 1.8rem;
    text-align: center;
    margin-top: 1rem;
  }
`;

const ProductCard = ({ title, price = "10$", discountPrice, image }) => {
  return (
    <ProductCardComponent>
      <div className="card">
        <div className="image-holder">
          <Img
            className="image"
            fluid={image.childImageSharp.fluid}
            alt={`Image ${title}`}
          />
        </div>
        <div className="title">{price}</div>
        <div className="title">{title}</div>
        <div className="btn">add to cart</div>
      </div>
    </ProductCardComponent>
  );
};

export default ProductCard;
