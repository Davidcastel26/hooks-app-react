import React, { useEffect } from 'react'

const Messajex = () => {

    useEffect(() => {
        console.log('Component done');
        return () => {
            console.log('waiting for a new Component');
        }
    }, [])

    return (
        <>
            <h3>u r on Fire!</h3>  
        </>
    )
}

export default Messajex;
