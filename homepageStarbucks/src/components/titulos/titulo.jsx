import "../titulos/titulo.css"



/**
 * @Titulo es un componente que utilizamos para crear los titulos principales de las diferentes secciones del menu del Header
 * @param titulo Utilizamos este parametro que cuenta cun un h1 en el cual se incluiran los titulos principales de cada seccion del menu Header.
 * @param colorFondo Utilizamos este parametro para aplicar un background-color a cada h1 de las secciones del menu
 * @param colorLetra Utilizamos este parametro para aplicar un color para darle color a cada titulo de las secciones del menu.
 * @param alto Utilizamos este parametro para modificar el height de contenedor de las secciones del menu Header.
 */
function Titulo({titulo, colorFondo, colorLetra, alto}) {
  return (
    <div className="conteinerTitulo" style={{backgroundColor: colorFondo, color: colorLetra, height: `${alto}px`}}>
        <h1>{titulo}</h1>

    </div>
  )
}

export default Titulo