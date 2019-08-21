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
                        <Image
                            style={{ maxWidth: "100%", maxHeight: "250px" }}
                        />
                    </Link>
                </div>
                <LocaleSelector />
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
