import React, {useContext} from "react";
import { appContext } from "../../App";
import Productos from "./productos";
import "./productosMenu.css";




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
