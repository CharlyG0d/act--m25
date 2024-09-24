import "./style.css"
import Logo from "../assets/log-antifa.webp"

const Header = () =>{
    return(
        <header>
            <img src={Logo} alt="Logo de la marca" width="60" height="60" />
            <nav>
                <span><a href="#">Inicio</a></span>
                <span><a href="#">Productos</a></span>
                <span><a href="#">Cuenta</a></span>
                <span><a href="#">Cart Icon</a></span>
            </nav>
        </header>
    )
    }
    
    export default Header;