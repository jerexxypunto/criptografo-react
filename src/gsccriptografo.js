import AttatbashAlgorithm from "./utils/algorithm/atatbash.js";

/* Clase que contiene toda la logica del criptografo de GSC */
export default class GSCCriptografo{

    constructor( algorithm, input, output){
        this.algorithm = algorithm;
        this.input = input;
        this.output = output;
    }

    setAlgorithm(algorithm  ) {
        this.algorithm = algorithm;
    }

    setInput(input  ) {
        this.input = input;
    }

    applyAlgorithm( ) {

        const stringArray = [ ... this.input ];

    

        if ( this.algorithm == 'attatbash' ) {
            const attatbashHandller = new AttatbashAlgorithm();
            const encriptedArray = stringArray.map( letter => attatbashHandller.run( letter ) );
            return encriptedArray ;   
        }

    }

    returnEncriptedOutput( output ) {
        this.output = output;
        return this.output;
    }

    run() {

        // Establece el algoritmo de encriptacion.
        this.setAlgorithm( this.algorithm );

        // Obtiene el string a traducir.
        this.setInput( this.input );

        // Aplica el alcortimo de encriptacion al string
        const encrypted = this.applyAlgorithm( this.algorithm );

        // Retorna el string encriptado .
        return this.returnEncriptedOutput(encrypted);
    }
}