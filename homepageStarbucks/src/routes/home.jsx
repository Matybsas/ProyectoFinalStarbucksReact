import "./style/styles.css";
import Baners from "../components/banners/baners";
import banner1 from "../components/banners/image/BANNER1.png";
import banner2 from "../components/banners/image/foto2-starbucks.png";
function HomePage() {
  return (
    <div className="contenedorHome">
      <Baners
        imagen={banner1}
        titulo={"¡La magia llegó a nuestras tiendas! "}
        texto={"Sentí el cariño de esta temporada con tus favoritos y llena de sabor cada momento. #LlevemosLaMagia"}
        boton={false}
        isFlipped={false}
        colorFondo={"rgb(222 24 121)"}
        colorLetra={"rgb(255 255 255)"}
      />
        <br /><br />
      <Baners
        imagen={banner2}
        titulo={"Unite a algo más grande"}
        texto={"Revisa las oportunidades que tenemos para vos"}
        isFlipped={true}
        boton={true}
        colorFondo={"rgb(213 233 226)"}
        colorLetra={"#15754b"}
      />
    </div>
  );
}

export default HomePage;
