import "../titulos/titulo.css"




function Titulo({titulo, colorFondo, colorLetra, alto}) {
  return (
    <div className="conteinerTitulo" style={{backgroundColor: colorFondo, color: colorLetra, height: `${alto}px`}}>
        <h1>{titulo}</h1>

    </div>
  )
}

export default Titulo