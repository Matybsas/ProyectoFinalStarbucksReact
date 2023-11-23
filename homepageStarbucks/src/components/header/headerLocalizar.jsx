import "./styles/headerlocalizar.css";
import IconoLocalizar from "./image/location-dot-solid.svg";
import luna from "../../assets/luna.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";

function HeaderLocalizar() {
  
  const {theme, setTheme} = useContext(ThemeContext);
  
  const handleClick=()=>{
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`esto es:`, theme);
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
