import classNames from "classnames";
import Label from "./Label.js";
import React from "react";

const getLabel = function(props, options) {
    if (props.label) {
        const cl = classNames({
            active: ((props.value !== undefined) && !(options && options.noActive)) || (options && options.active)
        });
        return (
            <Label
                htmlFor={props.id}
                invalid={props.hasError}
                className={cl}
            >
                {props.label}
            </Label>
        );
    }
}

const getErrorMessage = function(props) {
    if (props.hasError && props.errorMessage) {
        const style = {
            color: "red",
            fontSize: "smaller",
            marginTop: "-5px",
            marginBottom: "5px"
        }
        return (
            <div style={style}>
                {props.errorMessage}
            </div>
        )
    }
}

export {
    getLabel,
    getErrorMessage
}
