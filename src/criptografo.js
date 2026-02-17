// SCRIPT DE FUNCIONALIDAD

const boxOriginal = document.getElementById('org');
const boxEncriptado = document.getElementById('enc');

const En = document.getElementById('En');
const desEn = document.getElementById('Des');

let textoOriginal;
let textoEncriptado;
let codificado;
let tipoDeAbc;
let hasTilde = false ;
let tilde = false;
var letter;

let leido = false;

const btn_encrip = document.querySelector("#encriptar");
const btn_desencrip = document.querySelector("#desencriptar");
const a_z = ["a", "b", "c", "d", "e", "f" , "g", "h", "i",
    "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];
const A_Z = ["A", "B", "C", "D", "E", "F" , "G", "H", "I",
 "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
btn_encrip.addEventListener('click', encriptar);
btn_desencrip.addEventListener('click', () =>{
    boxOriginal.value = "";
    boxEncriptado.value = "";
    codificado = undefined;
});

function encriptar() {
    boxEncriptado.value = "";
    let textoOriginal = boxOriginal.value
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
        boxEncriptado.value += codificado;

    }
}

// script de carga
const popOut = document.getElementById('ventanaDeCarga');
setTimeout(() => {
    popOut.style.display = 'none';
}, 2000);

setTimeout(() => {
    document.getElementById('alerta').setAttribute('open', 'true');
}, 2100);

const cerrar = document.querySelector('.close-button');
const cerrarBtn = document.querySelector('button.cerrar');

En.addEventListener('click', ()=>{
    btn_encrip.innerHTML = "Encriptar";
    leido = false;
    leido_func();    
});
desEn.addEventListener('click', ()=>{
    btn_encrip.innerHTML = "Desencriptar";
    leido = false;
    leido_func();
});

cerrar.addEventListener('click', () => {
    document.getElementById('alerta').removeAttribute('open');
    leido = true;
    leido_func()
});
cerrarBtn.addEventListener('click', () => {
    document.getElementById('alerta').removeAttribute('open');
    leido = true;
    leido_func()
});

function leido_func() {
    if (leido) {
        document.querySelector(".modal").style.display = 'block';
    }else{
        document.querySelector(".modal").style.display = 'none';
        document.querySelector("footer").classList.remove('blur');
        document.querySelector(".contenedor").classList.remove('blur');
    }
}
document.addEventListener('keyup', encriptar);