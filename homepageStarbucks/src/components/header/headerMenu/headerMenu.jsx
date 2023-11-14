import "../styles/headerMenu.css";
function HeaderMenu({name, link, customcss}) {
  return (
    <nav>
    <ul>
    <li className={customcss}>{name}</li>
    </ul>
    </nav>
  )
}

export default HeaderMenu