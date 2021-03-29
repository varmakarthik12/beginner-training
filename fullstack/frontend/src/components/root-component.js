import React from "react";
import { useSomeStateHook } from "../hooks/someHook";

export const SomeFunctionalComponent = (props) => {
    // const [someState, setSomeState] = useSomeStateHook()
    // const inputProps = {
    //     onChange: (...args) => {
    console.log("asdfjasdflkasjdflkasjflksdjf");
    //         console.log({ args })
    //     }
    // }

    // <input type="text" onChange={() => {
    //     console.log("sadfasdf");
    // }} />
    return <div onClick={() => { console.log("hjsdfhajklsdhfjksahfjklsadhfj"); }}> asdfasdf </div>
}