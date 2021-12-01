import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1>Counter with hook: { state }</h1>
            <hr />
            {/* the (2) means that we are set the valeu into our custom hook (setting the value as factore) chech the useCounter.js  */}
            <button onClick={ () => increment(2) } className='btn'> +1 </button>
            <button onClick={ reset } className='btn'> Reset </button>
            <button onClick={ () => decrement(2) } className='btn'> -1 </button>
        </>
    )
}

export default CounterWithCustomHook
