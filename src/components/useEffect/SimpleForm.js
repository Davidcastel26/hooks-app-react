import React, {useEffect, useState} from 'react'
import './effects.css'
import Messajex from './Messaje';


const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:'',
    })    

    const {name, email} = formState;

    useEffect( () => {
        // console.log('hey');
    }, []);
    
    useEffect( () => {
        // console.log('formState changed');
    }, [formState]);
    
    useEffect( () => {
        // console.log('emails changed');
    }, [email]);

    const handleInputChange = ({target}) => {
        //return the name from the value in this case we set the name as name
        // console.log(e.target.name);
        //this will give us the value from the input 'could be any key from the keyword'
        // console.log(target.value);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
         <h1> use Effect </h1> 
         <hr />
        
         <div className='form-group'>
            <input 
                type="text"
                name='name'
                className='form-control'
                placeholder='Your name'
                autoComplete='off'
                value={ name }
                onChange={ handleInputChange }
             />
         </div>   
         <div className='form-group'>
            <input 
                type="text"
                name='email'
                className='form-control'
                placeholder='example@mail.com'
                autoComplete='off'
                value={ email }
                onChange={ handleInputChange }
             />
         </div>   
         {
             (name === '123') && < Messajex />
         }
        </>
    )
}

export default SimpleForm
