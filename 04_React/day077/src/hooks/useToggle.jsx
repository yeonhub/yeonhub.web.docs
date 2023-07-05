import { useState } from "react"

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState)
    const onToggle = () => {
        setState(!state)
    }
    const onChk = (boolean) => {
        setState(boolean)
    }
    return { state, onToggle, onChk }
}