import { useState } from 'react'
import './assets/mu.min.css';
import './App.css'
import FormComponent from './components/Form';
import HeadApp from './components/HeadApp';


function App() {

  return (
    <div className='criptograph-container '>
        <HeadApp />
        <FormComponent />
    </div>
  )
}

export default App
