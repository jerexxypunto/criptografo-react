import React from 'react';
import style from './BotonDev.css';

const ButtonDev = ({depuracion, cambiarDepuracion}) => {
    return ( 
        <div className="radio-container">
            <input type="checkbox" id="devButton" />
            <label 
                className="labelButton"
                htmlFor="devButton"
                onClick={()=>{
                    cambiarDepuracion(!depuracion);
                }}
            >
                <span className="circle">dev</span>
            </label>
        </div>
     );
}
 
export default ButtonDev;