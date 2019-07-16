import classNames from "classnames";
import React from "react";
import PropTypes from 'prop-types';

const Label = (props) => {
    const style = {
        color: props.invalid?"red":"inherit"
    }
    const classes = classNames({
        active: props.active
    }, props.className);
    return (
        <label
            htmlFor={props.htmlFor}
            className={classes}
            style={style}
        >
            {props.children}
        </label>
    )
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    invalid: PropTypes.bool,
    active: PropTypes.bool,
}

export default Label;