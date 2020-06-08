import React from "react";

function Newsinfo(props) {
    return (
        <div key={props.id}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Newsinfo;
