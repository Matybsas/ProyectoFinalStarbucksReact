import HeaderMenu from "./headerMenu/headerMenu";
import HeaderLogo from "./headerLogo";
import HeaderLocalizar from './headerLocalizar';
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
    link: "experiencia",
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
