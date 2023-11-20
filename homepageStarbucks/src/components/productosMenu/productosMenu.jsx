import cafeUno from "../banners/image/cafe1.png"
import cafeDos from"../banners/image/cafe2.png"
import cafeTres from"../banners/image/cafe3.png"
import teUno from"../banners/image/te1.png"
import teDos from"../banners/image/te2.png"
import teTres from"../banners/image/te3.png"
import comidaUno from"../banners/image/comida1.png"
import comidaDos from"../banners/image/comida2.png"
import comidaTres from"../banners/image/comida3.png"
import paraLlevarUno from"../banners/image/cafeGranos.png"
import paraLlevarDos from"../banners/image/teSaquitos.png"
const listaProductosUno =[
    {
        img:cafeUno,
        text:"Cafés calientes",
        
    },
    {
        img:cafeDos,
        text:"Cafés helados",
    },
    {
        img:cafeTres,
        text:"Frappuccino",
    },
    {
        img:teUno,
        text:"Té caliente",
    },
    {
        img: teDos,
        text:"Té helado",
    },
    {
        img: teTres,
        text:"Heladas",
    },
    {
        img:"calientes1",
        text:"Calientes",
    },
]
const listaProductosDos =[
    {
        img:comidaUno,
        text:"Cafés calientes",
        
    },
    {
        img:comidaDos,
        text:"Cafés helados",
    },
    {
        img:comidaTres,
        text:"Frappuccino",
    },
]
const listaProductosTres =[
    {
        img:paraLlevarUno,
        text:"Cafés calientes",
        
    },
    {
        img:paraLlevarDos,
        text:"Cafés helados",
    },
]

function ProductosMenu( ) {
  return (
    <div className="conteinerProductoMenu">
      
        {listaProductosUno.map((elementos=>(
              <img src={elementos.img} alt="" />,
              <p>{elementos.text}</p>
      )
        
        )
    )}
        
        
      
        {listaProductosDos.map(elemento=>(
            <img src={elemento.img} alt="" />,
            <p>{elemento.text}</p>
        ))}
      
        {listaProductosTres.map(elemento=>(
            <img src={elemento.img} alt="" />,
            <p>{elemento.text}</p>
        ))}
    </div>
  )
}

export default ProductosMenu