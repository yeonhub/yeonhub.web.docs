import { useState } from "react"

export const useToggle2 = (initialState = false) => {
    const [state, setState] = useState(initialState)
    const onToggle = (bool) => {
        switch (bool) {
            case 'toggle':
                setState(!state)
                break;
            case 'true':
                setState(true)
                break;
            case 'false':
                setState(false)
                break;
            default: false
                break;
        }
    }
    return { state, onToggle }
}

// setState(y=>typeof(x)==='boolean' ? x : !y)