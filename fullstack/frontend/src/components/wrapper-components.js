import React from "react";
import { useSomeStateHook } from "../hooks/someHook";

export const SomeFunctionalComponent = (props) => {
    // useSomeStateHook
    return <WrapperComponent><p>sdfsdfsd</p></WrapperComponent>
}

let WrapperComponent = (props) => {
    console.log({ props });

    return <h1> {props.children} </h1>
}