import "./styles/headerlocalizar.css"
import IconoLocalizar from './image/location-dot-solid.svg'

function HeaderLocalizar() {
  return (
    <div className="contenedorLocalizar">
    <a href="#"><img className="IconoLocalizar" src={IconoLocalizar} alt="" />Localizar Tienda</a>
    
    </div>
  )
}

export default HeaderLocalizar