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
  {
    name: "ADMIN",
    link: "tienda",
    customcss: "",
  },
  
];
/**
 * @Header es un componente que cuenta con 3 componentes mas anidados, en el header tenemos el menu principal de la web
 * (HeaderLogo, es un componente anidado en donde tenemos el logo de la web y tambien lo utilizamos para navegar al home de nuestra web)
 * (HeaderMenu, es un componente anidado que cuenta con una lista con 4 objetos y lo utilizamos para navegar por las distintas secciones de la web, detallado en la lista)
 * (HeaderLocalizar, es un componente anidado en el cual cuenta con una seccion donde encontramos un mapa de google con todos los comercios de starbucks y tambien cuenta con un boton para cambiar el tema de nuestra web "Dark"/"Light" )
 */
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
