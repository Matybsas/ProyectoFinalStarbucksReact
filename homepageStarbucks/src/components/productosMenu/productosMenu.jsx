import React, {useContext} from "react";
import { appContext } from "../../App";
import Productos from "./productos";
import "./productosMenu.css";

/**
 * 
 * @ProductosMenu Es un componente el cual cuanta con otro componente anidado para porder colocar un array de objetos, filtrar los objetos mediante el elemento map() y asi presentar en la seccion menu todos los productos de la web.
 * Se filtran por separados cada una de las listas declaradas en App.jsx utilizando el elemento map para obtener de cada lista los productos, al tener las lista nos permite modificar los productos o eliminarlos sin romper nada.
 * Tambien se coloco unas h3 con las distintas secciones del menu el cual cuenta con (Bebidas, Comida y En casa) tambien se utiliza unos hr para separar cada seccion.
 * Por ultimo cremaos la variable appState y con la utilizacion de useContext en la seccion Admin del menu Header se creo un formulario el cual permite agregar productos y en un futuro se podra eliminar tambien los productos.
 */


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
