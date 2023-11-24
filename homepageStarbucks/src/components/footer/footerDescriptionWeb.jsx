import "../footer/footerDescriptionWeb.css";

/**
 * @FooterDescriptionWeb este componente anidado al Footer se encarga de poner un submenu en la parte inferior del mismo.
 * @param name se utiliza para colocar el titulo que se va a visualizar en la web.
 * @param link es un enlace que lo utilizamos para llevar al visitante a la seccion  de la web.
 * @param customDescription lo utilizamos para cambiar los estilos css de cada uno de los objetos de la liste. 
 */
function FooterDescriptionWeb({name, link, customDescription}) {
  return (
    <div>
        <a href={link} className={customDescription}>{name}</a>
    </div>
  )
}

export default FooterDescriptionWeb