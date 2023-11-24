import "../routes/style/styles.css";
import Titulo from "../components/titulos/titulo"
import cafe1 from "../components/banners/image/cafeTaza.png"
import cafe2 from "../components/banners/image/curvaDeTostado.jpg"
import cafe3 from "../components/banners/image/cafetera.png"
import TituloYTexto from "../components/tituloTexto/tituloYTexto"


function CafePage() {
  return (
    <div className="conteinerCafe">
      
      <Titulo
      titulo={"Nuestro Café"}
      colorFondo={"rgb(32 57 51)"}
      colorLetra={"#fff"}
      alto={250}
      />
      <section>
      <TituloYTexto
      texto={"El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo."}
      />
      <img src={cafe1} alt="" />
      <TituloYTexto
      texto={"De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares. "}
      texto2={"Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos."}
      />
     <h2 className="tituloCafeH2">Nuestro tostado Starbucks</h2>
     <TituloYTexto
      texto={"Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. "}
      />
      <img src={cafe2} alt="" />
      <TituloYTexto
      titulo={"Rubio"}
      texto={"El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves. "}
      titulo2={"Medio"}
      texto2={"El café con tostado medio es balanceado con sabores agradables y enriquecidos."}
      titulo3={"Oscuro"}
      texto3={"Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos."}
      />
       <h2 className="tituloCafeH2">Descubre los métodos de preparación en Starbucks, ¿Cuál es el correcto para vos?</h2>
       <TituloYTexto
      texto={"Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo. "}
      />
           
      <img src={cafe3} alt="" />
      <TituloYTexto
      texto={"Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks."}
      />
      <button className="buttonCafe">Conocé nuestros métodos</button>
      </section>
    </div>
  )
}

export default CafePage