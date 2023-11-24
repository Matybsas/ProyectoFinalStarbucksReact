import "./styles/headerMenu.css";
import { NavLink } from "react-router-dom";

/**
 * @HeaderMenu En este componente anidado al Header encontramos un nav, ul, li para la creacion del menu el cual se utiliza para navegar por las diferentes secciones de la web ayudado del Routes.
 * @param name Lo utilizamos para colocar el titulo del la seccion del menu.
 * @param link Utilizamos para obtener el enlace al cual enviaremos al visitante de la web.
 * @param  customcss Utilizamos para modificar los estilos de cada uno de los elementos declarados anteriormente.
 * 
 */
function HeaderMenu({ name, link, customcss }) {
  return (
    <nav>
      <NavLink to={link}>
        <ul>
          <li className={customcss}>{name}</li>
        </ul>
      </NavLink>
    </nav>
  );
}
export default HeaderMenu;
