import "./footerMenu.css";

function FooterMenu({title,link, customCss, image}) {
  return (
    <div className="containerMenu">
        <div className={customCss}>
        <h3>{title}</h3>
        <p>{link}</p>
        </div>
        
    </div>
  )
}

export default FooterMenu