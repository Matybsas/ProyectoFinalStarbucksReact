import "./styles/headerLogo.css";
import Logo from './image/png-transparent-starbucks.png'
import { NavLink } from "react-router-dom";

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
