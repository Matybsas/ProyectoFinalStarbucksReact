import "../routes/style/styles.css"
import Titulo from "../components/titulos/titulo"
import Baners from "../components/banners/baners"
import experiencia1 from "../components/banners/image/experiencia1.png"
import experiencia2 from "../components/banners/image/experiencia2.png"
import experiencia3 from "../components/banners/image/experiencia3.png"

function ExperienciaPage() {
  return (
    <div className="conteinerExperiencia">
      <Titulo
      titulo={"Experiencia Starbucks"}
      colorFondo={"rgb(32 57 51)"}
      colorLetra={"#fff"}
      alto={150}
      
      />
      <div className="containerSubtituloExperiencia">
      <h2>Para cada momento hay una forma de vivir la Experiencia Starbucks como vos quieras.</h2>
      </div>
    <Baners
        imagen={experiencia1}
        titulo={"In Store "}
        texto={"En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable."}
        boton={false}
        isFlipped={true}
        colorFondo={"rgb(242 240 236)"}
        colorLetra={"rgb(31 31 31)"}
      />
        <br /><br />
        <Baners
        imagen={experiencia2}
        titulo={"Drive Thru"}
        texto={"Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto."}
        boton={false}
        isFlipped={false}
        colorFondo={"rgb(242 240 236)"}
        colorLetra={"rgb(31 31 31)"}
      />
        <br /><br />
        <Baners
        imagen={experiencia3}
        titulo={"Delivery "}
        texto={"Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya."}
        boton={true}
        isFlipped={false}
        colorFondo={"rgb(242 240 236)"}
        colorLetra={"rgb(31 31 31)"}
      />
        </div>
  )
}

export default ExperienciaPage