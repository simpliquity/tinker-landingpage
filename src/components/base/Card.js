import React from "react";

export default function Card(props) {
    return (
        <div className="card" style={props.style}>
            <div className="card-content" style={props.contentStyle}>
                {props.children}
            </div>
        </div>
    )
}

