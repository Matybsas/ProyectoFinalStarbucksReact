import "./footerRedesSociales.css";

/**
 * @FooterRedesSociales Es un anidado del Footer, donde utilizamos para poner las redes sociales de la web.
 * @param  icono Utilizamos esto para colocar una imagen como icono de las redes sociales. 
 * @param  link Utilizamos el enlace para enviar al visitante a las diferentes redes sociales utilizando el elemento "a"
 */
function FooterRedesSociales({ icono, link }) {
  return (
    
    <div className="contenedorRedes redesSociales">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icono} className="imagenesRedes" alt=""></img>
      </a>
    </div>

    

  );
}

export default FooterRedesSociales;
