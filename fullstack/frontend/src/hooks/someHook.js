import { useState } from "react"

export const useSomeStateHook = () => {

    const [someState, setSomeState] = useState("some place holder");
    if (someState == "bad") {
        console.error("This is bad")
    }
    return {
        someState: someState,
        setState: setSomeState
    }
}