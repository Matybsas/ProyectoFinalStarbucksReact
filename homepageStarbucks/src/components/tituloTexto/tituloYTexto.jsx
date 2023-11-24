import "./tituloYTexto.css"

/**
 * @TituloYTexto este mini componente es un anidado del Cafe. El cual fue creado para reutilizar los titulos y los parrafos de la misma pagina.
 * El componente cuenta con h3 para los titulos y p para los parrafos y br para separar las diferentes secciones, tambien tenemos un contenedor div para aplicar los diferentes estilos css. 
 * @param { titulo, titulo2, titulo3} param titulo,titulo2,titulo3  se utiliza para crear los diferentes titulos secundarios del apartado Cafe.
 * @param { texto, texto2, texto3} param texto, texto2,texto3 se utiliza para crear los diferentes parrafos del apartado de Cafe.        
 */

function TituloYTexto({titulo, texto,titulo2, texto2, titulo3, texto3,}) {
  return (
    <div className="contenedorTituloTexto">
        <h3 className="tituloCafe">{titulo}</h3>
        <p className="parrafoCafe">{texto}</p>
        <br />
        <h3 className="tituloCafe">{titulo2}</h3>
        <p className="parrafoCafe">{texto2}</p>
        <br />
        <h3 className="tituloCafe">{titulo3}</h3>
        <p className="parrafoCafe">{texto3}</p>
        
    </div>
  )
}

export default TituloYTexto