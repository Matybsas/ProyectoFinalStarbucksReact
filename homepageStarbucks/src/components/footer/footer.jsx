import FooterMenu from "./footerMenu";
import FooterRedesSociales from "./footerRedesSociales";
import afip from "../../assets/data-fiscal.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import "./footer.css";
const ListMenuUno = [
  {
    title: "Sobre nosotros",
    link: "",
    customCss: "menuUno",
    image: "",
  },
  {
    title: "",
    link: "Nuestra historia",
    customCss: "menuUno ",
    image: "",
  },
  {
    title: "",
    link: "Nuestra misión",
    customCss: "menuUno",
    image: "",
  },
  {
    title: "",
    link: "Nuestra cultura inclusiva y valores",
    customCss: "menuUno",
    image: "",
  },
  {
    title: "",
    link: "Nuestro café",
    customCss: "menuUno",
    image: "",
  },
  {
    title: "",
    link: "Historias y novedades",
    customCss: "menuUno",
    image: "",
  },
  {
    title: "",
    link: "Trabajá con nosotros",
    customCss: "menuUno",
    image: "",
  },
  {
    title: "",
    link: "Comunicados oficiales",
    customCss: "menuUno",
    image: "",
  },
];
const ListMenuDos = [
  {
    title: "Impacto social",
    link: "",
    customCss: "menuDos",
    image: "",
  },
  {
    title: "",
    link: "Planeta",
    customCss: "menuDos ",
    image: "",
  },
  {
    title: "",
    link: "Personas",
    customCss: "menuDos ",
    image: "",
  },
];
const ListMenuTres = [
  {
    title: "Atención al cliente",
    link: "",
    customCss: "menuTres",
    image: "",
  },
  {
    title: "",
    link: "Contacto",
    customCss: "menuTres ",
    image: "",
  },
  {
    title: "",
    link: "Medios de pago",
    customCss: "menuTres",
    image: "",
  },
  {
    title: "",
    link: "Defensa de las y los consumidores",
    customCss: "menuTres",
    image: "",
  },
];
const ListMenuCuatro = [
  {
    title: "Experiencia Starbucks",
    link: "",
    customCss: "menuCuatro",
    image: "",
  },
  {
    title: "",
    link: "Formas de comprar",
    customCss: "menuCuatro ",
    image: "",
  },
  {
    title: "",
    link: "Delivery",
    customCss: "menuCuatro",
    image: "",
  },
];
const listRedes = [
  {
    name: "facebook",
    link: "https://web.facebook.com/StarbucksArgentina?_rdc=1&_rdr",
    icono: facebook,
    custom: "iconRedesSociales",
  },
  {
    name: "facebook",
    link: "https://www.instagram.com/starbucksargentina/",
    icono: instagram,
    custom: "iconRedesSociales",
  },
  {
    name: "facebook",
    link: "https://www.linkedin.com/company/starbucks-coffee-argentina/",
    icono: linkedin,
    custom: "iconRedesSociales",
  },
];

function Footer() {
  return (
    <div className="contenedorFooterMenu">
      <div className="conteinerMenus">
        <div className="conteinerMenuFooter">
          {ListMenuUno.map((item, index) => {
            return (
              <FooterMenu
                key={index}
                title={item.title}
                link={item.link}
                customCss={item.customCss}
                image={item.image}
              />
            );
          })}
        </div>

        <div className="conteinerMenuFooter">
          {ListMenuDos.map((item, index) => {
            return (
              <FooterMenu
                key={index}
                title={item.title}
                link={item.link}
                customCss={item.customCss}
                image={item.image}
              />
            );
          })}
        </div>

        <div className="conteinerMenuFooter">
          {ListMenuTres.map((item, index) => {
            return (
              <FooterMenu
                key={index}
                title={item.title}
                link={item.link}
                customCss={item.customCss}
                image={item.image}
              />
            );
          })}
        </div>

        <div className="conteinerMenuFooter">
          {ListMenuCuatro.map((item, index) => {
            return (
              <FooterMenu
                key={index}
                title={item.title}
                link={item.link}
                customCss={item.customCss}
                image={item.image}
              />
            );
          })}
        </div>
        <img src={afip} className="afip" alt=""></img>
      </div>

      <div className="conteinerRedSocial">
        <hr />
        {listRedes.map((item, index) => {
          return (
            <FooterRedesSociales
              key={index}
              link={item.link}
              icono={item.icono}
              custom={item.custom}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
