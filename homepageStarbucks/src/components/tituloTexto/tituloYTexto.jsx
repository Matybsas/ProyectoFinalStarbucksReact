import "./tituloYTexto.css"

function TituloYTexto({titulo, texto,titulo2, texto2, titulo3, texto3,}) {
  return (
    <div className="contenedorTituloTexto">
        <h3>{titulo}</h3>
        <p>{texto}</p>
        <br />
        <h3>{titulo2}</h3>
        <p>{texto2}</p>
        <br />
        <h3>{titulo3}</h3>
        <p>{texto3}</p>
        
    </div>
  )
}

export default TituloYTexto