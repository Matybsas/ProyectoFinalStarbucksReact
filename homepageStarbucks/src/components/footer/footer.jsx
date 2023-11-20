import FooterMenu from "./footerMenu"
import "./footer.css"
const ListFooterMenu=[
    {
     title:"Sobre nosotros",   
     link:"",
     customCss:"menuUno",
     image:"",
    },
    {
      title:"",   
      link:"Nuestra historia",
      customCss:"menuUno ",
      image:"",
     },
     {
      title:"",   
      link:"Nuestra mision",
      customCss:"menuUno",
      image:"",
     },
     {
      title:"Impacto Social",   
      link:"",
      customCss:"menuDos",
      image:"",
     },
     {
      title:"",   
      link:"Planeta",
      customCss:"menuDos",
      image:"",
     },
     {
      title:"",   
      link:"Personas",
      customCss:"menuDos",
      image:"",
     },
     {
      title:"Atencion al Cliente",   
      link:"",
      customCss:"menuTres",
      image:"",
     },
     {
      title:"",   
      link:"Contacto",
      customCss:"menuTres",
      image:"",
     },
     {
      title:"",   
      link:"Medio de Pagos",
      customCss:"menuTres",
      image:"",
     },
]

function Footer() {
  return (
    <div>
        {ListFooterMenu.map((item, index) =>{
          return(
            <div className="contenedorFooterMenu"  key={index}>
             
              <FooterMenu 
              
              title={item.title}
              link={item.link}
              customCss={item.customCss}
              image={item.image}
              />
              </div>
              );
            })}
    </div>
  )
}

export default Footer