import HeaderMenu from "./headerMenu.jsx";
import HeaderLogo from "./headerLogo.jsx";
import HeaderLocalizar from './headerLocalizar.jsx';
import "./styles/header.css";

const menuList = [
  
  {
    name: "MENÚ",
    link: "menu",
    customcss: "",
  },
  {
    name: "CAFÉ",
    link: "cafe",
    customcss: "",
  },
  {
    name: "EXPERIENCIA STARBUCKS",
    link: "experienciaStarbucks",
    customcss: "",
  },
  
];

function Header() {
  return (
    <header>
      <HeaderLogo />
       <div className="header__container">
          {menuList.map((aMenuLista, index) => {
            return (
              
                <HeaderMenu
                  key={index}
                  name={aMenuLista.name}
                  link={aMenuLista.link}
                  customcss={aMenuLista.customcss}
                />
                           
            );
          })}
        </div>
      <HeaderLocalizar/>
    </header>
  );
}

export default Header;
