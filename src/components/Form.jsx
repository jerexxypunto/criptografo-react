import React, { useState } from 'react';
import GSCCriptografo from '../gsccriptografo';
import CryptedBox from './CryptedBox';

const FormComponent = () => {
  const [data, setData] = useState({ input: '', output: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = data.input;
    const HanlderCriptograph = new GSCCriptografo( 'attatbash', msg, '' );
    const encripted = HanlderCriptograph.run();

    setData( prev => ({
        ...prev,
        ['output']: encripted 
    }) );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form 
      className="mui-form mui-container-fluid form-container" 
      onSubmit={handleSubmit}
    >
      <div className="mui-row">
        <div className="mui-col-md-6">
          <div className="mui-textfield">
            <textarea 
              placeholder="Input" 
              name="input" 
              value={data.input} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="mui-col-md-6">
          <CryptedBox output={data.output} />
        </div>
      </div>            
      <button 
        type="submit" 
        className="mui-btn mui-btn--raised"
      >
        Cifrar
      </button>
    </form>
  );
}
 
export default FormComponent;