import React,{useState} from 'react';
import CriptoStyles from './../css/criptografo.css';

function encriptar(texto) {
    let codificado;
    let tipoDeAbc;
    let hasTilde = false ;
    let tilde = false;
    var letter;

    let leido = false;
    const a_z = ["a", "b", "c", "d", "e", "f" , "g", "h", "i",
        "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];
    const A_Z = ["A", "B", "C", "D", "E", "F" , "G", "H", "I",
    "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"];

    let textoOriginal = texto;
    for (let letter of textoOriginal) {
        // verifica mayusculas o minusculas
        if (letter == letter.toUpperCase()) {
            tipoDeAbc = A_Z;
        } else if (letter == letter.toLowerCase()) {
            tipoDeAbc = a_z;
        }
        if (textoOriginal[(textoOriginal.indexOf(letter) + 1)] == "'") {
            hasTilde = true;
        }
        console.log("tilde: " + hasTilde);
        // quita los tildes y los guarda en var tilde
        switch (letter) {
            case "á":
                letter = "a";
                tilde = true;
                break;
            case "Á":
                letter = "A";
                tilde = true;
                break;
            case "é":
                letter = "e"
                tilde = true;
                break;
            case "É":
                letter = "E"
                tilde = true;
                break;
            case "í":
                letter = "i"
                tilde = true;
                break;
            case "Í":
                letter = "I"
                tilde = true;
                break;
            case "ó":
                letter = "o"
                tilde = true;
                break;
            case "Ó":
                letter = "O"
                tilde = true;
                break;
            case "ú":
                letter = "u"
                tilde = true;
                break;
            case "Ú":
                letter = "U"
                tilde = true;
                break;
            case "'":
                codificado = "";
                break;          
            default:
                tilde = false;
                codificado = letter;
                break;
        }
        console.log("letra: " + letter)
        // comienza el ciclo
        for (const letraAbc of tipoDeAbc) {
            if (letter == letraAbc) { // compara letra iterada con letras en abc
                if(tilde){
                    codificado = tipoDeAbc[(tipoDeAbc.length - 1) - tipoDeAbc.indexOf(letraAbc)];
                    codificado+= "'";
                }else{
                    if(hasTilde){
                        switch (letter) {
                            case "Z":
                                codificado = "Á";
                                hasTilde = false;
                                break;
                            case "z":
                                codificado = "á";
                                hasTilde = false;
                                break;
                            case "V":
                                codificado = "É";
                                hasTilde = false;
                                break;
                            case "v":
                                codificado = "é";
                                hasTilde = false;
                                break;
                            case "R":
                                codificado = "Í";
                                hasTilde = false;
                                break;
                            case "r":
                                codificado = "í";
                                hasTilde = false;
                                break;
                            case "I":
                                codificado = "Ó";
                                hasTilde = false;
                                break;
                            case "i":
                                codificado = "ó";
                                hasTilde = false;
                                break;
                            case "F":
                                codificado = "Ú";
                                hasTilde = false;
                                break;
                            case "f":
                                codificado = "ú";
                                hasTilde = false;
                                break;

                            default:
                                hasTilde = false;
                                break;
                        }
                    }else{
                        codificado = tipoDeAbc[(tipoDeAbc.length - 1) - tipoDeAbc.indexOf(letraAbc)];
                    }
                    
                }
                console.log("Letra codificada: " + codificado);
                /*Guarda en let codificado la letra del abecedario
                 con la pocicion de (logitud de abc - posicion de letra iterada)*/
            }else if (letter == " ")
                {
                    /* si detecta un espacio vacio asigna a 
                    var codificado ese espacio vacio */
                    codificado = letter;
                }
        }

    }

    return codificado;
}

const Criptografo = ()=>{
    const [inputBox,changeSateInput] = useState('');
    const [outputBox,changeSateOutput] = useState('');
    
    return(
        <div className='grid-container grid-col-1 grid-col-md-9 grid-col-lg-5 gap-5 text-light'>
            <div className='grid-span-md-4 grid-span-lg-2'>
                <h2>Input</h2>
                <textarea
                    className='w-100 h-100'
                    value={inputBox}
                    onChange={(e)=>{
                        let contenidoBox = e.target.value;
                        changeSateInput(contenidoBox);
                        console.log(encriptar(contenidoBox));
                    }}
                 />
            </div>
            <button 
                className='btn btn-gsc-verde'
                onClick={encriptar}
            >
                Prosesar
            
            </button>
            <div className='grid-span-md-4 grid-span-lg-2'>
                <h2>Output</h2>
                <textarea
                    className='w-100 h-100'
                    value={outputBox}
                    onChange={(e)=>{
                        changeSateOutput(e.target.value);
                    }}
                 />
            </div>
        </div>
    );
}

export default Criptografo;