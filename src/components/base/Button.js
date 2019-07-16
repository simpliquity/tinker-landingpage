// import Icon from "./Icon.js";
import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

const getIcon = function(props) {
    // return (
    //     <Icon
    //         key="icon"
    //         icon={props.icon}
    //         left={props.label ? true : false}
    //         inButton={true}
    //         style={props.iconStyle}
    //     />
    // );
    return null;
};

const getLabel = function(props) {
    return <span key="label">{props.label}</span>;
};

const getContent = function(props) {
    if (props.icon && props.label) {
        return [getIcon(props), " ", getLabel(props)];
    } else if (props.icon) {
        return getIcon(props);
    } else if (props.label) {
        return getLabel(props);
    }
};

const getButtonClass = function(props) {
    let btnClassList = ["waves-effect", "waves-light"];
    if (props.flat) {
        btnClassList.push("btn-flat");
    } else {
        btnClassList.push("btn");
    }
    switch (props.type) {
        case "confirm":
            btnClassList.push("btn-accent");
            break;
        case "success":
            btnClassList.push("btn-success");
            break;
        case "warning":
            btnClassList.push("btn-warning");
            break;
        case "danger":
            btnClassList.push("btn-danger");
            break;
        case "default":
            btnClassList.push("btn-default");
            break;
        default:
            break;
    }
    return btnClassList.join(" ");
};

export default function Button(props) {
    const sharedAttributes = {
        className: getButtonClass(props),
        onClick: props.handleClick
    };
    if (props.url) {
        return (
            <a href={props.url} {...sharedAttributes}>
                {getContent(props)}
            </a>
        );
    } else {
        let btnAttributes = {};
        if (props.submit) {
            btnAttributes.type = "submit";
        }
        if (_.isNumber(props.tabIndex)) {
            btnAttributes.tabIndex = props.tabIndex;
        }
        return (
            <button
                {...btnAttributes}
                {...sharedAttributes}
                style={props.style}
            >
                {getContent(props)}
            </button>
        );
    }
}

Button.propTypes = {
    flat: PropTypes.bool,
    handleClick: PropTypes.func,
    icon: PropTypes.string,
    label: PropTypes.node,
    tabIndex: PropTypes.number,
    type: PropTypes.string,
    url: PropTypes.string
};
