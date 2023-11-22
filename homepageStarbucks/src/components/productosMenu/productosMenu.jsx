import React, {useContext} from "react";
import { appContext } from "../../App";
import Productos from "./productos";
import "./productosMenu.css";
{/*import cafeUno from "../banners/image/cafe1.png";
import cafeDos from "../banners/image/cafe2.png";
import cafeTres from "../banners/image/cafe3.png";
import teUno from "../banners/image/te1.png";
import teDos from "../banners/image/te2.png";
import teTres from "../banners/image/te3.png";
import calientes1 from "../banners/image/calientes1.png";*/}




function ProductosMenu() {
  const {appState} =useContext(appContext);
  return (
    <section className="containerProductosMenu">
            <div className="containerTitulos">
        <hr />
        <h3>Bebidas</h3>
        <hr />
      </div>
      <div className="contenedorProductoMenu">
        {appState.listaProductosUno.map((elemento, index) => {
          return (
            <Productos key={index} img={elemento.img} text={elemento.text} />
          );
        })}
        </div>
        <br />
        <div className="containerTitulos">
        <hr />
        <h3>Comida</h3>
        <hr />
        </div>

        <div className="contenedorProductoMenu">
        {appState.listaProductosDos.map((elemento, index) => {
          return (
            <Productos key={index} img={elemento.img} text={elemento.text} />
          );
        })}
        </div>
        <br />
        <div className="containerTitulos">
        <hr />
        <h3>En casa</h3>
        <hr />

        </div>

        <div className="contenedorProductoMenu">
        {appState.listaProductosTres.map((elemento, index) => {
          return (
            <Productos key={index} img={elemento.img} text={elemento.text} />
          );
        })}
      </div>
    </section>
  );
}

export default ProductosMenu;
