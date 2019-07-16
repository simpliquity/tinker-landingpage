import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "features/workspace.png" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                fadeIn={true}
            />
        )}
    />
);
export default Image;
