import ProductosMenu from "../components/productosMenu/productosMenu";
import "../routes/style/styles.css";


/**
 * 
 * @MenuPage Esta seccion es un menu el cual se encarga de mostrar los productos que la empresa vende.
 * lo hacemos a travez de un componente anidado llamado ProductosMenu. Tambien aca por medio de ese componente
 * se puede agregar productos. Para mayor informacion de ese componente ver mas informacion en su componente.
 */
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
