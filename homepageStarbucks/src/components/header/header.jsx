import HeaderMenu from "./headerMenu/headerMenu";
import "./header.css";
const menuList = [
  {
    name: "Logo",
    link: "logo",
    customcss:"",
  },
  {
    name: "MENU",
    link: "menu",
    customcss:"",
  },
  {
    name: "CAFE",
    link: "cafe",
    customcss:"",
  },
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customcss:"",
  },
  {
    name: "Localizador Tienda",
    link: "localizador",
    customcss:"header__item--right",
  },
];

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header__container">
          {menuList.map((aMenuLista, index) => {
            return <HeaderMenu key={index} name={aMenuLista.name} link={aMenuLista.link} customcss={aMenuLista.customcss}/>;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
