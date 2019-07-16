import React from "react";

export default Container = function(props) {
    return (
        <div className="container" style={{marginTop:"10px"}}>
            {props.children}
        </div>
    )
}
