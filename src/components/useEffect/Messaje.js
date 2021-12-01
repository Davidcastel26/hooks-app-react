import React, { useEffect, useState } from 'react'

const Messajex = () => {

    const [coords, setCoords] = useState({x:0,y:0})

    const {x,y} = coords;

    useEffect(() => {

        //to prevent the callback from the effect
        const mouseMove = (e) => {
            // to get the position use e into a log 
            // console.log(e); 

            //here we still getting the listener even when the name is diferent
            const coors = { x: e.x, y: e.y }
            // console.log(coors);
            setCoords(coors)

            // console.log(' :D ');
        }
        
        // console.log('Component done');
        window.addEventListener('mousemove', mouseMove)

        return () => {
            // console.log('waiting for a new Component');

            //since we have a window. event we could use it here as well
            window.removeEventListener('mousemove',mouseMove)
        }

    }, [])

    return (
        <>
            <h3>u r on Fire!</h3>
            <p>
                x: {x} y: {y}
            </p>  
        </>
    )
}

export default Messajex;
