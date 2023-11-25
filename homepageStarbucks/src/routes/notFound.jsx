import "./style/styles.css";
import error from './imagenes/error-404.jpg';

/**
 * 
 * @NotFoundPage Este es un apartado que se ha creado para informar a un usuario cuando hay un error 404 Pagina no encontrada, el mensaje se mostrara cuando no se encuentre la pagina o que no coincida con la web. 
 */

function NotFoundPage() {
  return (
    <div className="containerError">
    <div className="tituloError">
    <h1>Error 404 - Pagina no Encontrada</h1>
    </div>
    <div className="conteinerImageError">
    <img src={error} alt="" />
    </div>
    </div>
  )
}

export default NotFoundPage