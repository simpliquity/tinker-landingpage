import classNames from "classnames";
import {getLabel, getErrorMessage} from "./InputUtils.js";
import React from "react";
import PropTypes from 'prop-types';

const getInput = function(props) {
    const cl = classNames({
        invalid: props.hasError
    });
    return (
        <input
            id={props.id}
            type={props.type || "text"}
            className={cl}
            style={props.style}
            value={props.value || ""}
            placeholder={props.placeholder || ""}
            onChange={(event) => {
                if (props.handleChange) {
                    props.handleChange(event.target.value);
                }
            }}
            onBlur={(event) => {
                if (props.handleBlur) {
                    props.handleBlur(event.target.value);
                }
            }}
            required={props.required || false}
            disabled={props.disabled}
            min={props.min || ""}
            max={props.max || ""}
            step={props.step || ""}
        />
    )
}

export default function TextInput(props) {
    const cl = classNames({
        "input-field": !props.simple,
        col: true,
        s12: true
    });
    return (
        <div className={cl} style={props.style} >
            {getInput(props)}
            {getLabel(props)}
            {getErrorMessage(props)}
        </div>
    )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    simple: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
}
