import "./styles/headerLogo.css";
import Logo from './image/png-transparent-starbucks.png'




function HeaderLogo() {
  return (
    <>
      <div className="contenedorLogo">
        <a href=""><img src={Logo} alt="" /></a>
      </div>
    </>
  );
}

export default HeaderLogo;
