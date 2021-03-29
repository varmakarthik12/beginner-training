import { useState } from "react"

export const useSomeStateHook = () => {

    const [someState, setSomeState] = useState("some place holder")
    return {
        someState: "I'm something",
        setState: setSomeState
    }
}