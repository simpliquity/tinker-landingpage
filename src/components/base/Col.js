import classNames from "classnames";
import React from "react";
import PropTypes from 'prop-types';

const getColClass = function(props) {
    let colSizes = {};
    if (props.s) {colSizes["s"+props.s]=true} else {colSizes.s12=true};
    if (props.m) {colSizes["m"+props.m]=true};
    if (props.l) {colSizes["l"+props.l]=true};
    if (props.sOffset) {colSizes["offset-s"+props.sOffset]=true};
    if (props.mOffset) {colSizes["offset-m"+props.mOffset]=true};
    if (props.lOffset) {colSizes["offset-l"+props.lOffset]=true};
    return classNames({
        col: true
    }, colSizes);
}

export default function Col(props) {
    return (
        <div id={props.id} className={getColClass(props)} style={props.style}>
            {props.children}
        </div>
    )
}

Col.propTypes = {
    l: PropTypes.number,
    m: PropTypes.number,
    s: PropTypes.number,
    sOffset: PropTypes.number,
    mOffset: PropTypes.number,
    lOffset: PropTypes.number,
}
