import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import './all.sass'
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lexend';
    src: url('../fonts/Lexend-Regular.ttf')  format('truetype'), /* Safari, Android, iOS */
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: 'Lexend', sans-serif;
    color: #333;
    background-color: #f1f1f1;
  }

  & * {
    box-sizing: border-box;
  }

  .l-layout {
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <ParallaxProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default TemplateWrapper;
