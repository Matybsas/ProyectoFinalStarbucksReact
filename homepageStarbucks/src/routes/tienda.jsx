import { useContext } from "react";
import { appContext } from "../App";
import "../routes/style/styles.css";

function TiendaPage() {
  const { appState, dispatch } = useContext(appContext);
  const handleClick = () => {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const imagenProducto = document.getElementById("imagenProducto").value;
    const action = {
      type: "ADD_BEBIDAS",
      payload: { img: imagenProducto, text: nombreProducto },
    };
    dispatch(action);
  };
  return (
    <div className="conteinerFormulario">
      <h1>Ingreso de productos</h1>
      <hr />
      <form>
        <input type="text" id="nombreProducto"  placeholder="Nombre del Producto"required/>
        <input type="file" id="imagenProducto" required />
        <button onClick={handleClick}>Cargar Producto</button>
      </form>
    </div>
  );
}

export default TiendaPage;
