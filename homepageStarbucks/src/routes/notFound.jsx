import error from './imagenes/error-404.jpg'

function NotFoundPage() {
  return (
    <>
    <h1>Error 404 - Pagina no Encontrada</h1>
    <img src={error} alt="" />
    </>
  )
}

export default NotFoundPage