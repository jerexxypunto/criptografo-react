import React,{useState} from 'react';
import CriptoStyles from './../css/criptografo.css';
import ButtonDev from './BotonDev';
import Box from './Box';

let sal = "";

function encriptar(inPutBox,outPutBox,depuracion) {
    
    outPutBox("");

    // Parametros
    let codificado;
    let tipoDeAbc;
    let hasTilde = false ;
    let tilde = false;
    var letter;
    let leido = false;
    let res = "";
    // Fin de Parametros

    // Abecedario minusculas
    const a_z = ["a", "b", "c", "d", "e", "f" , "g", "h", "i",
    "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

    // Abecedario mayusculas
    const A_Z = ["A", "B", "C", "D", "E", "F" , "G", "H", "I",
    "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"];
    let textoOriginal = inPutBox
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
        if(depuracion) console.log("tilde: " + hasTilde);
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
        if (depuracion) console.log("letra: " + letter);
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
                if(depuracion) console.log("Letra codificada: " + codificado);
                /*Guarda en let codificado la letra del abecedario
                 con la pocicion de (logitud de abc - posicion de letra iterada)*/
            }else if (letter == " ")
                {
                    /* si detecta un espacio vacio asigna a 
                    var codificado ese espacio vacio */
                    codificado = letter;
                }
        }
        res += codificado;
        outPutBox(res);

    }
}

const Criptografo = ()=>{
    const [entrada, cambiarEntrada] = useState('');
    const [salida, cambiarSalida]  = useState('');
    const [depuracion, cambiarDepuracion] = useState(false, ['']);

    return(
        <>
            <div className='grid-container grid-col-1 grid-col-md-9 grid-col-lg-5 gap-5 text-light'>
                <Box nombre="Input" input={entrada} funcion={cambiarEntrada} />
                <button 
                    className='btn btn-gsc-verde'
                    onClick={()=>{
                            encriptar(entrada,cambiarSalida,depuracion);
                    }}
                >
                    Prosesar
                
                </button>
                <Box nombre="Output" input={salida} funcion={cambiarSalida} />
            </div>
            <ButtonDev depuracion={depuracion} cambiarDepuracion={cambiarDepuracion}/>
        </>
    );
}

export default Criptografo;