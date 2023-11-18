import "./styles/headerMenu.css";
import { NavLink } from "react-router-dom";
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
