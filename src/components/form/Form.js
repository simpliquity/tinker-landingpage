import React from "react";

export default function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.children}
        </form>
    )
}
