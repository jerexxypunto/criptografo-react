class Abcdario{

    constructor() {

        this.letters = [ 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z' ];

        this.type = 'latin';

        this.mapaTildes = {
            'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
            'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
            'ñ': 'n', 'Ñ': 'N' 
        };

    }

    quitarTilde(caracter) {
        // Verificar si el carácter tiene tilde y devolverlo sin tilde
        return this.mapaTildes[caracter] || caracter;
    }

    hasTilde( caracter ){
        return this.mapaTildes[caracter] ? true : false ;
    }

    isMayus( letter ){
        if( letter === letter.toUpperCase() ){
            return true;
        }else {
            false;
        }
    }

    getLetterPosition( letter ) {

        letter = this.quitarTilde( letter );

        // Convert to Uppercase
        const letterUppercase = letter.toUpperCase();

        const salida = { uppercase: false, posicion: 0 };

        const posicion = this.letters.indexOf( letterUppercase );
        salida.posicion = posicion

        if ( this.isMayus( letter )){
            salida.uppercase = true;
        }

        return salida;
    }

    getLetterOposite( letterPosicion ) {
        const opocitePosicion = ( this.letters.length - 1 ) - letterPosicion;
        const encriptatedLetter = this.letters[ opocitePosicion ];
        return encriptatedLetter
    }
}


export default class AttatbashAlgorithm{

    isunknowSymbol( character ) {

        const unknowSymbols = [ ' ', '.', ',', ':', ';' ];

        if ( unknowSymbols.includes( character ) ) {
            return true;
        }


        return false
    }

    run( letter ) {

        const abcdearioHandler = new Abcdario();
        const salida = { encriptedLetter: '', letterConfig: { letter: letter , uppercase: false, tilde: false } };


        if( this.isunknowSymbol( letter ) ) {
            salida.encriptedLetter = letter;
            return salida;
        }


        // Idenfica la posicion de la letra en el abcdeario
        const letterPosicionObject = abcdearioHandler.getLetterPosition( letter );
        const letterPosicion = letterPosicionObject.posicion;

        // Obten la letra en el abcdeario que este en la posicion opuesta en el abcdedario.
        let encriptedLetter = abcdearioHandler.getLetterOposite( letterPosicion );

        console.log( letter , encriptedLetter );

        if ( ! letterPosicionObject.uppercase){
            encriptedLetter = encriptedLetter.toLowerCase();
        }
        
        salida.encriptedLetter = encriptedLetter;
        salida.letterConfig = letterPosicionObject;
        salida.letterConfig.letter = letter;

        if( abcdearioHandler.hasTilde( letter ) ){
            salida.letterConfig.tilde = true ;
        }else{
            salida.letterConfig.tilde = false;
        }

        return salida;

    }

}