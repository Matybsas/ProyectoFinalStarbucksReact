import ProductosMenu from "../components/productosMenu/productosMenu";
import "../routes/style/styles.css";

function MenuPage() {
  return (
    <div className="conteinerMenu">
      <section className="conteinerTituloMenu">
        <span className="span">¡Disfrútalos!</span>
        <h2 className="titulo">Conoce nuestras bebidas y alimentos de temporada</h2>
      </section>

      <ProductosMenu />
    </div>
  );
}

export default MenuPage;
