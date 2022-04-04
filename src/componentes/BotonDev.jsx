import React from 'react';
import style from './BotonDev.css';

const ButtonDev = ({depuracion, cambiarDepuracion}) => {
    return ( 
        <div className="radio-container">
            <input 
                type="checkbox" 
                id="devButton" 
                checked={depuracion}
                onChange={
                    (event)=>{
                        cambiarDepuracion(event.target.checked);
                    }
                } 
            />
            <label 
                className="labelButton"
                htmlFor="devButton"
            >
                <span className="circle">dev</span>
                <span className="wall-transparent"></span>
            </label>
        </div>
     );
}
 
export default ButtonDev;