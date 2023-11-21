import "./footerRedesSociales.css";

function FooterRedesSociales({ icono, link, name }) {
  return (
    
    <div className="contenedorRedes redesSociales">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icono} alt=""></img>
      </a>
    </div>

    

  );
}

export default FooterRedesSociales;
