import "./productos.css"

/**
 * @Productos Es un componente anidado de ProductosMenu el cual cumple la funcion de insertar la imagen y el titulo de cada Producto con sus respectivos contenedores div para poder contener y darle estilos css a cada producto.
 * @param img  se coloca un img en el cual se van a cargar tantas imagenes de productos como se obtenga de la lista de objetos del array.
 * @param text se coloca un p en el cual se va utilizar como la descripcion de cada producto que se obtenga de la lista de objetos del array.
 */
function Productos({img, text}) {
  return (
    <div className="productos">
        <div className="productoImagen">
        <img src={img} alt="" />
        </div>
        <div className="productoTexto">
        <p>{text}</p>
        </div>
    </div>
  )
}
export default Productos