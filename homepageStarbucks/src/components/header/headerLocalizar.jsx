import "./styles/headerlocalizar.css";
import IconoLocalizar from "./image/location-dot-solid.svg";
import luna from "../../assets/luna.png";
import { ThemeContext } from "../../App";
import { useContext } from "react";

function HeaderLocalizar() {
  
  const {dataTheme, setTheme} = useContext(ThemeContext);
  
  const handleClick=()=>{
    setTheme(dataTheme === "light" ? "dark" : "light");
    console.log(`esto es:`, dataTheme);
  }
  return (
    <div className={`contenedorLocalizar ${dataTheme}`}>
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
