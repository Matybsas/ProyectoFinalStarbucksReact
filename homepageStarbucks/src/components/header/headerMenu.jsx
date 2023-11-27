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
      <ul>
        <li className={customcss}>
          <NavLink to={link}>{name}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default HeaderMenu;
