import "./footerMenu.css";

/**
 * @FooterMenu es un componente anidado del footer, el cual consta con un menu principal de 4 listas que derivan a diferentes partes de la web.  
 * @param title Lo utilizamos para colocar el titulo de cada seccion del menu.
 * @param link  Lo utilizamos para enlazar con la seccion nueva que va a llevar al visitante.
 * @param customCss Lo utilizamos para modificar los estilos css del FooterMenu.
 * @param image  En este caso solo lo declaramos para no romper el codigo ya que luego lo utilizaremos en el Footer.
 *  
 */
function FooterMenu({title,link, customCss, image}) {
  return (
        
        <div className={customCss}>
        <h3>{title}</h3>
        <p>{link}</p>
        </div>
        
        
    
  )
}

export default FooterMenu