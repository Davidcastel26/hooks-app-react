import { useState } from 'react';

const useCounter = (initialSatate = 10) => {
    
    const [state, setState] = useState(initialSatate)

    const increment = (factor = 1) => {
        setState( state + factor)
    }

    const decrement = (factor = 1) => {
        setState(state - factor)
    }

    const reset = () => {
        setState( initialSatate )
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}

export default useCounter
