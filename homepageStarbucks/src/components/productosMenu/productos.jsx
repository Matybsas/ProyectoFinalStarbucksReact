import "./productos.css"

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