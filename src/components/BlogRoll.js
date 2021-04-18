import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Layout from "./Layout";
import { Button } from "../containers";

const BlogRollComponent = styled.div`
  ${Button}, .button {
    color: #333;
    border-color: #333;
    text-decoration: none;
  }

  header p {
    font-size: 14px;
  }

  p {
    font-size: 18px;
  }

  article {
    padding: 20px 0;
    margin: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <BlogRollComponent className="l-layout">
        {posts &&
          posts.map(({ node: post }) => (
            <div>
              <article
                className={`article ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p>
                    <Link className="button" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span>{post.frontmatter.date}</span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Button>
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading
                    </Link>
                  </Button>
                </p>
              </article>
            </div>
          ))}
      </BlogRollComponent>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
