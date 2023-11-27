import { useContext, useState } from "react";
import { appContext } from "../App";
import "../routes/style/styles.css";

/**
 * 
 * @TiendaPage Realizamos un formulario el cual consta con 2 input y un buton para cargar productos en el apartado de menu.
 * ya que se mezclo mucho codigo decidi explicar parte por parte que es lo que se realizo.
 */


function TiendaPage() {
  {/*Creamos una variable y utilizamos useState para guardar su valor (texto) */}
  const [productName, setProductName] = useState("");
  {/*Creamos una variable y utilizamos useState para guardar su valor (imagen) */}
  const [productImage, setProductImage] = useState("");
  
  const { dispatch } = useContext(appContext);

  {/*Creamos la funcion handleClick para que el momento de darle click al boton en la seccion add_bebidas nos carge la imagen y el nombre del producto*/}
  {/*tambien aplicamos una funcion anonima para evitar que el button sea utilizado como submit*/}
  const handleClick = (event) => {
    event.preventDefault()
    const action = {
      type: "ADD_BEBIDAS",
      payload: { img: productImage, text: productName },
    };
    dispatch(action);
  };
  
  {/* Creamos la funcion handle change para escuchar cuando se agrega el texto a su input para tomar su valor*/}
  const handleChange = (event) => {
    setProductName(event.target.value);
  };

  {/*Convertimos la imagen a un link utilizando base64 */}
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  {/* Creamos la funcion handleFileChange para escuchar cuando se agrega la imagen a su input para tomar su valor*/}
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setProductImage(base64);
  };



  return (
    <div className="conteinerFormulario">
      <h1>Ingreso de productos</h1>
      <hr />
      <form>
        <label htmlFor="nombreProducto">Ingresa el nombre del Producto:</label>
        <input
          type="text"
          id="nombreProducto"
          value={productName}
          onChange={(event) => handleChange(event)}
          required
        />
          
        <label  htmlFor="imagenProducto">Ingresa la imagen del Producto:</label>
        <input  type="file" id="imagenProducto" onChange={(event) => handleFileChange(event)} required />

        <button onClick={(event)=>handleClick(event)}>Cargar Producto</button>
      </form>
    </div>
  );
}

export default TiendaPage;
