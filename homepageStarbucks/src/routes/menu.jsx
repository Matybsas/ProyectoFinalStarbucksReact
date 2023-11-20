import ProductosMenu from "../components/productosMenu/productosMenu"


function MenuPage() {
  return (
    <div className="conteinerMenu">
      <section>

        <span>¡Disfrútalos!</span>
        <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
        <hr />
        <h3>Bebidas</h3>
        <hr />        
        <ProductosMenu

        />


      </section>
    </div>
  )
}

export default MenuPage