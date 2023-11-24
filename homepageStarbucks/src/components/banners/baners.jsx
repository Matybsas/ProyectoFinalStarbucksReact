import "./baners.css";
/**
 * @function Baners 
 * Este componente se utiliza para realizar banners basicos en cualquier parte de la web,  
 * con un titulo, imagen, texto, boton.Tambien podemos modificar el color del fondo, color de latra y tamaño del titulo.  
 * @param isFlipped lo utilizamos para invertir el lado de las imagenes con el texto. 
 * @param boton lo utilizamos para ver si el banner lleva o no boton dependiendo si se define en true  o false.
 */
function Baners({ imagen, titulo, texto, boton, colorFondo, isFlipped, colorLetra, tamanioTitulo }) {
  return (
    <div className={`contenedorBanner ${isFlipped ? "bannerReverse" : ""}`} style={{ backgroundColor: colorFondo, color: colorLetra  }}>

      <div className="contenedorImagen">
        <img src={imagen} alt="" />
      </div>
      
      <div className="contenedorTexto">
        <h2 style={{ fontSize:`${tamanioTitulo}px`  }}>{titulo}</h2>
        <p>{texto}</p>
        {boton &&(<button className="botonBanner" style={{color: colorLetra}} >Ver mas</button>)}
        
      </div>
    
    </div>
  );
}

export default Baners;
