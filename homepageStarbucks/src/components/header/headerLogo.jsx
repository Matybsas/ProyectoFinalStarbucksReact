import "./styles/headerLogo.css";
import Logo from './image/png-transparent-starbucks.png'
import { NavLink } from "react-router-dom";

/**
 * @HeaderLogo Este componente anidado del Header, cumple la funcion de colocar el logo principal de la web y tambien a traves de Routes podemos movernos al home de la web.
 * Utilizando NavLink en conjunto Routes el cual se encuentra en App.jsx.
 * Para el logo utilizamos un contenedor y un img para poder contener y modificar su tamanio por medio de estilos css y el elemento img para cargar la imagen a utilizar
 */
function HeaderLogo() {
  return (
    <>
    <NavLink to='/'>
      <div className="contenedorLogo">
        <img src={Logo} alt=""> 
        </img>
        
      </div>
      </NavLink>
    </>
  );
}

export default HeaderLogo;
