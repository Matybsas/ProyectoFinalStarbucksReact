import "./baners.css";

function Baners({ imagen, titulo, texto, boton, colorFondo, isFlipped, colorLetra }) {
  return (
    <div className={`contenedorBanner ${isFlipped ? "bannerReverse" : ""}`} style={{ backgroundColor: colorFondo, color: colorLetra  }}>

      <div className="contenedorImagen">
        <img src={imagen} alt="" />
      </div>
      
      <div className="contenedorTexto">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        {boton &&(<button className="botonBanner" style={{color: colorLetra}} >Ver mas</button>)}
        
      </div>
    
    </div>
  );
}

export default Baners;
