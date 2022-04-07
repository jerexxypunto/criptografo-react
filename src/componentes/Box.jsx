import React from 'react';

const Box = ({nombre, input, funcion})=>{
    return(
        <div className='grid-span-md-4 grid-span-lg-2'>
                <h2>{nombre}</h2>
                <textarea
                    className='w-100 h-100'
                    onChange={(e)=>{
                        funcion(e.target.value)
                    }}
                    value={input}
                />
        </div>
    );
}

export default Box;