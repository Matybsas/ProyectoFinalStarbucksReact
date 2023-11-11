import "./headerMenu.css";

function HeaderMenu({name, link, customcss}) {
  return (
    
    <li className={customcss}>{name}</li>
    
  )
}

export default HeaderMenu