import React from 'react';
import HeaderMenu from './headerMenu/headerMenu';

const menuList =[
    {
        name: "Logo",
        link: "logo",
    },
    {
        name: "MENU",
        link: "menu",
    },
    {
        name: "CAFE",
        link: "cafe",
    },
    {
        name: "EXPERIENCIA",
        link: "experiencia",
    },
    {
        name: "Localizador",
        link: "localizador",
    },
]

function Header() {
  return (
    <header>
        <div className="wrapper">
            <div className="header__container">
            {menuList.map((aMenuLista) => { 
                console.log(aMenuLista);
                return (
                    <HeaderMenu name={aMenuLista.name} link={aMenuLista.link} />
                );
            })}
            </div>
        </div>
    </header>
  );  
}

export default Header;