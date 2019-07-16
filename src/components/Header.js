import I18n from "./locale/I18n.js";
import Image from "./TinkerlampLogo.js";
import Link from "./Link.js";
import LocaleSelector from "./LocaleSelector.js";
import PropTypes from "prop-types";
import React from "react";
import { withTheme } from "@material-ui/core/styles";

const Header = () => {
    return (
        <header
            style={{
                paddingTop: "1rem",
                paddingBottom: `0.45rem`
            }}
        >
            <LocaleSelector />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}
            >
                <div
                    style={{
                        paddingRight: "40px"
                    }}
                >
                    <Link target="/">
                        <Image style={{ maxWidth: "100%" }} />
                    </Link>
                </div>
                {/* <div
                    style={{
                        flexBasis: "300px",
                        flexGrow: 1,
                        flexShrink: 1
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            color: "#000", //theme.palette.primary.main,
                            fontSize: "1.4rem",
                            marginTop: "20px"
                        }}
                    >
                        <I18n label="TinkerlampSlogan" />
                    </div>
                </div> */}
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default withTheme()(Header);
