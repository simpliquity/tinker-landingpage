// import Icon from "./Icon.js";
import React from "react";
import PropTypes from 'prop-types';

const getAddIcon = function(props) {
    // if (props.addIcon) {
    //     return (
    //         <div className="right">
    //             <a href="#" onClick={props.handleAdd}>
    //                 <Icon icon="add"/>
    //             </a>
    //         </div>
    //     )
    // }
    return null;
}

const getEditIcon = function(props) {
    // if (props.editIcon) {
    //     return (
    //         <div className="right">
    //             <a href="#" onClick={props.handleEdit}>
    //                 <Icon icon="edit_mode"/>
    //             </a>
    //         </div>
    //     )
    // }
    return null;
}

const getDoneIcon = function(props) {
    // if (props.doneIcon) {
    //     return (
    //         <div className="right">
    //             <a href="#" onClick={props.handleDone}>
    //                 <Icon icon="check"/>
    //             </a>
    //         </div>
    //     )
    // }
    return null;
}

const getButton = function(props) {
    if (props.button) {
        return (
            <div className="right">
                {props.button}
            </div>
        )
    }
}

export default function CardTitle(props) {
    const cl = props.small ? "small-card-title" : "card-title";
    return (
        <div className={cl}>
            {getButton(props)}
            {getAddIcon(props)}
            {getEditIcon(props)}
            {getDoneIcon(props)}
            {props.text}
            {props.children}
        </div>
    )
}

CardTitle.propTypes = {
    text: PropTypes.node,
    small: PropTypes.bool,
    editIcon: PropTypes.bool,
    handleEdit: PropTypes.func,
    addIcon: PropTypes.bool,
    handleAdd: PropTypes.func,
    doneIcon: PropTypes.bool,
    handleDone: PropTypes.func,
    button: PropTypes.node,
}

