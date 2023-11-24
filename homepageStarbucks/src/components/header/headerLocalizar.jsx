import "./styles/headerlocalizar.css";
import IconoLocalizar from "./image/location-dot-solid.svg";
import luna from "../../assets/luna.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";


/**
 * 
 * @HeaderLocalizar en este componente anidado del Header, lo utilizamos para colocar un mapa de google con las direcciones de todos los comercios de Starbucks y un boton para cambiar el tema de "Light" a "Dark" en toda la web
 * El Localizar tienda trae un elemento "a" el cual contiene una imagen para colocar un icono y lo utilizamos para enlazar a la seccion donde mostrara el mapa de google en un futuro.
 * El Button se le coloco un handleclick para cambiar el color de la web de "Light" a "Dark" utilizando UseContext y ThemeContext.
 */
function HeaderLocalizar() {
  
  const {theme, setTheme} = useContext(ThemeContext);
  
  const handleClick=()=>{
    const newTheme =theme ==="light" ? "dark" : "light"
    setTheme(newTheme );
    localStorage.setItem("theme", newTheme);
  }
  return (
    <div className={`contenedorLocalizar ${theme}`}>
      <a href="#">
        <img className="IconoLocalizar" src={IconoLocalizar} alt="" />
        Localizar Tienda
      </a>

      <div className="conteinerDarkLigth">
        <button onClick={handleClick}>
          <img src={luna} alt="" />
        </button>
      </div>
    </div>
  );
}

export default HeaderLocalizar;
