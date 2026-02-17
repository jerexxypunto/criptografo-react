import { useState } from 'react';
import './assets/mu.min.css';
import './App.css'
import FormComponent from './components/Form';
import HeadApp from './components/HeadApp';

function StartScreen({ onContinue }) {
  return (
    <div className="start-screen">
      <div>
        <h2>Criptografo <b>2.0</b></h2>
        <p>Desarrollado por GSC Diseños</p>
        <button type="button" onClick={onContinue}>Continuar</button>
      </div>
    </div>
  );
}

function AlertScreen({ onClose }) {
  return (
    <div className="alert-screen">
      <div className="alert-content">
        <h2>¿Qué es Atbash?</h2>
        <p>
          El método de encriptación Atbash es un cifrado muy simple que funciona cambiando cada letra del alfabeto por su opuesta: la A se convierte en Z, la B en Y, la C en X, y así sucesivamente hasta el final; para descifrar el mensaje se aplica exactamente la misma regla, ya que el proceso es reversible, lo que lo hace fácil de entender pero también poco seguro, porque no usa claves ni operaciones complejas, solo una sustitución directa basada en el orden del alfabeto.
        </p>
        {onClose && (
          <button type="button" onClick={onClose}>Continuar</button>
        )}
      </div>
    </div>
  );
}

function AplicationScreen() {
  return (
    <div className="application-screen">
      <HeadApp />
      <FormComponent />
    </div>
  );
}

const SCREENS = {
  start: 'start',
  alert: 'alert',
  application: 'application',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.start);

  return (
    <div className='criptograph-container'>
      {currentScreen === SCREENS.start && (
        <StartScreen onContinue={() => setCurrentScreen(SCREENS.alert)} />
      )}
      {currentScreen === SCREENS.alert && (
        <AlertScreen 
          onClose={() => setCurrentScreen(SCREENS.application)} 
        />
      )}
      {currentScreen === SCREENS.application && (
        <AplicationScreen />
      )}
    </div>
  )
}

export default App
