import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Gallery from "../components/Gallery";

export const IndexPageTemplate = (props) => {
  // console.log(props);
  const imagesGrid = {
    left: {
      image: props.image,
      url: "/",
    },
    bottom: {
      image: props.image,
      url: "/",
    },
    center: {
      image: props.image,
      url: "/",
    },
    right: {
      image: props.image,
      url: "/",
    },
  };

  const slides = [...Array(12)].map(() => ({
    title: "title",
    description: "description",
    image: props.image,
  }));

  console.log({ slides: props.slides });
  return (
    <div>
      <Hero {...props} />

      <div className="l-layout">
        <Gallery imagesGrid={imagesGrid}></Gallery>
        <Carousel slides={props.slides} />
        <Carousel slides={slides} title="Hot Items" />
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log({ data });

  return (
    <Layout>
      <IndexPageTemplate
        {...frontmatter}

        // image={frontmatter.image}
        // title={frontmatter.title}
        // heading={frontmatter.heading}
        // subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        // intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        slides {
          description
          image {
            childImageSharp {
              fluid {
                src
                srcSet
                tracedSVG
              }
            }
          }
          title
        }
        color
        title
        image {
          childImageSharp {
            fluid {
              tracedSVG
              srcSet
              src
            }
          }
        }
      }
    }
  }
`;
