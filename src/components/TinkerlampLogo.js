import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import tinkerlampLogo from "../images/tinkerlamp-light.svg";

const Image = (props) => (
    <img src={tinkerlampLogo} style={props.style} />
    // <StaticQuery
    //     query={graphql`
    //         query {
    //             placeholderImage: file(
    //                 relativePath: { eq: "tinkerlamp-light.svg" }
    //             ) {
    //                 childImageSharp {
    //                     fixed(height: 60) {
    //                         ...GatsbyImageSharpFixed_withWebp_noBase64
    //                     }
    //                 }
    //             }
    //         }
    //     `}
    //     render={data => (
    //         <Img
    //             fixed={data.placeholderImage.childImageSharp.fixed}
    //             fadeIn={false}
    //         />
    //     )}
    // />
);
export default Image;
