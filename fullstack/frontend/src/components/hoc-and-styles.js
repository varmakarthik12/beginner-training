import React from "react";

const hoc = (comp) => {

    const styleObj = {
        color: "red",
        fontSize: "2rem"
    }
    return <h1 style={styleObj} > {comp} </h1>
}

export const SomeFunctionalComponent = () => {

    let m = <p> I'm a paragraph </p>;
    return hoc(m)
}