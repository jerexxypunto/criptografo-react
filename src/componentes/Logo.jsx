import React from 'react';

const Logo = (props)=>{
  return(
    <div className='text-light mx-auto'>
      <h3 className='display-3'>Criptografo</h3>
      <picture>
        <p className='d-inline mr-3'>by:</p>
        <img 
          src={props.src}
          alt={props.alt} 
        />
      </picture>
    </div>
  );
}

export default Logo;