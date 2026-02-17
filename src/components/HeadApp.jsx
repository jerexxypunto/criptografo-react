import { useState } from 'react';

const TEXTO_HISTORIA = (
    <>
       El método de encriptación <b>Atbash</b> es un cifrado muy simple que consiste en reemplazar cada
       letra del alfabeto por su opuesta (<b>A por Z, B por Y, C por X</b>, etc.), y para descifrarlo
       se aplica la misma regla porque es <i>totalmente reversible</i>; su origen se remonta a la <b>antigua tradición hebrea</b>,
       donde se utilizaba con el <i>alfabeto hebreo</i> y aparece mencionado en textos del <b>Antiguo Testamento de la Biblia</b>,
       funcionando como una <i>forma básica de ocultar mensajes</i> al invertir el orden del alfabeto,
       lo que lo convierte en uno de los <b>sistemas de cifrado más antiguos</b> que se conocen.
    </>
);

const HeadApp = () => {
    const [popupAbierto, setPopupAbierto] = useState(false);

    return ( 
        <div className="head-app">
            <h3> Criptografo </h3>
            <div className="mui-row">
                <div className="mui-col-md-6">
                    <table>
                        <tbody>
                        <tr> 
                            <th> Algoritmo </th>
                            <td> Atbash </td>
                        </tr>
                        <tr>
                            <th> Alfabeto </th>
                            <td> Latino ( A - Z ) </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mui-col-md-6 historia-container">
                    <h4> Información </h4>
                    <p className="historia-preview">
                         ¿Quieres saber cómo funciona el <b>Atbash</b> y cual es su orgen? Haz click en el botón.
                        <span className="historia-badge" onClick={() => setPopupAbierto(true)} > ver más </span>
                    </p>
                </div>
            </div>
            {popupAbierto && (
                <div
                    className="historia-popup-overlay"
                    onClick={() => setPopupAbierto(false)}
                    onKeyDown={(e) => e.key === 'Escape' && setPopupAbierto(false)}
                    role="button"
                    tabIndex={0}
                    aria-label="Cerrar"
                >
                    <div
                        className="historia-popup"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="historia-popup-titulo"
                    >
                        <div className="historia-popup-header">
                            <h4 id="historia-popup-titulo">Historia</h4>
                            <button
                                type="button"
                                className="historia-popup-cerrar"
                                onClick={() => setPopupAbierto(false)}
                                aria-label="Cerrar"
                            >
                                ×
                            </button>
                        </div>
                        <div className="historia-popup-body">
                            <p>{TEXTO_HISTORIA}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className="alert">
                <p>
                    Esta aplicacion permite encriptar y desencriptar mensajes de texto.
                </p>
            </div>
            
        </div>
     );
}
 
export default HeadApp;