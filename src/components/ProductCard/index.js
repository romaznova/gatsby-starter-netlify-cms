import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Button } from "../../containers";

const ProductCardComponent = styled.div`
  .card {
    padding-bottom: 1px;
    border: 1px solid #ebedec;
    background-color: #fff;
  }

  .image {
    width: 100%;
    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  .title {
    font-size: 1.8rem;
    margin-top: 1rem;
    text-align: center;
    text-decoration: underline;
  }

  .price {
    font-weight: 300;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
  }

  ${Button} {
    color: #333;
    border-color: #333;
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
        <div className="title">{title}</div>
        <div className="price">{price}</div>

        <Button>add to cart</Button>
      </div>
    </ProductCardComponent>
  );
};

export default ProductCard;
