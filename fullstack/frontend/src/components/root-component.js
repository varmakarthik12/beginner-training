import React from "react";
import { useSomeStateHook } from "../hooks/someHook";

export const SomeFunctionalComponent = (props) => {
    const { someState: alisedState, setState } = useSomeStateHook()
    const inputProps = {
        onChange: (e) => {
            setState(e?.target?.value)
        },
        value: alisedState
    }


    return <input type="text" {...inputProps} />
}