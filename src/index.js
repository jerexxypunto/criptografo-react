import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './componentes/Logo';
import Criptografo from './componentes/Criptpgrafo';

import GscBootsrap from './css/gsc-bootstrap.css'

import imgLogo from './img/logo-video.png'

const root = document.getElementById('root');



const App = ()=>{
  return(
    <div className="bg-gsc-primary vh-100">
      <div className="container">
        <Logo src={imgLogo} alt='logo'/>
        <Criptografo />
      </div>
    </div>
  );
}

ReactDOM.render(<App/>,root);

