import GSCCriptografo from "./gsccriptografo.js";

const msg = 'Hola mi nombre es Jeremias';

const HanlderCriptograph = new GSCCriptografo( 'attatbash', msg, '' );
const encripted = HanlderCriptograph.run();
console.log( encripted );