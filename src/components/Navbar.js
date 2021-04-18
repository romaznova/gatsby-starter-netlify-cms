import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import styled from "styled-components";

const NavbarComponent = styled.nav`
  .c-nav-placeholder {
    height: 62px;
  }
  .c-nav-container {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    padding: 2rem 1rem;
    background-color: #f7f7f7;
    border-bottom: 2px solid #333;

    &__list {
      flex: 1;
      text-align: center;
    }

    &__item {
      text-decoration: none;
      font-size: 1.8rem;
      margin: 0.5rem;
      padding: 0.5rem;
      color: #333;
      letter-spacing: 0.05rem;
    }
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  render() {
    return (
      <NavbarComponent>
        <div className="c-nav-container">
          <Link to="/" className="c-nav-container__logo" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          <div className="c-nav-container__list">
            <Link className="c-nav-container__item" to="/about">
              About
            </Link>
            <Link className="c-nav-container__item" to="/products">
              Products
            </Link>
            <Link className="c-nav-container__item" to="/blog">
              Blog
            </Link>
            <Link className="c-nav-container__item" to="/contact">
              Contact
            </Link>
            <Link className="c-nav-container__item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
        </div>
        <div className="c-nav-placeholder" />
      </NavbarComponent>
    );
  }
};

export default Navbar;
