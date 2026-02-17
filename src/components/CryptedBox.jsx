import { useEffect, useState } from "react";

const Charcter = ( { letra, original } )  => {
    return <span> <i>{ letra }</i> <i className="tool-tip" >{ original }</i> </span>
}

const CryptedBox = ({ output } ) => {

    const [ contenido, setContenido ] = useState( [ ] );

    function genrateCriptedString( output ) {

        let CriptedString = '';
        if( Array.isArray( output ) ) {
            output.forEach( e => {
                CriptedString += e.encriptedLetter;
            } );
        }

        return CriptedString;
    }

    useEffect( () => {

        if( Array.isArray( output ) ) {	
            setContenido(output);
        }
    }, [output] );

    function copyHanlder( e ){
        const nodo = e.target.parentElement;
        const copyData = nodo.getAttribute('data-cripted');

        navigator.clipboard.writeText(copyData).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }

    return ( 
        <div className="output-box" data-cripted={genrateCriptedString( output )} >
            <button className="button" onClick={copyHanlder}> Copy </button>
            <div className='inside'>
                <p>
                    {
                      contenido.map( ( e, i ) => {
                        return <Charcter 
                                    key={i} 
                                    letra={e.encriptedLetter} 
                                    original={e.letterConfig.letter}
                                    config={e.letterConfig}
                                />
                      } )  
                    }
                </p>    
            </div>
            <hr />
          </div>
     );
}

 
export default CryptedBox;