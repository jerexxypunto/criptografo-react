const HeadApp = () => {
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
                <div className="mui-col-md-6">
                    <h4> Historia </h4>
                    <p>
                        El cifrado Atbash es un tipo de cifrado en el que la primera letra del alfabeto se sustituye por la última, la segunda por la penúltima, y así sucesivamente. 
                        Es un tipo de cifrado por sustitución. 
                        El alfabeto latino se utiliza en este tipo de cifrado.
                    </p>
                </div>
            </div>
            <div className="alert">
                <p>
                    Esta aplicacion permite encriptar y desencriptar mensajes de texto.
                </p>
            </div>
            
        </div>
     );
}
 
export default HeadApp;