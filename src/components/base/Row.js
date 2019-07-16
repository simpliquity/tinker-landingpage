import React from "react";
import PropTypes from 'prop-types';

export default function Row(props) {
    let style = props.style;
    if (props.withMarginBottom) {
        style.marginBottom = "10px";
    }
    return (
        <div id={props.id} className="row" style={style}>
            {props.children}
        </div>
    )
}

Row.propTypes = {
    withMarginBottom: PropTypes.bool
}
