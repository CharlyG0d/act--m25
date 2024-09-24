import CartProduct from "./CartProduct/CartProduct";
import Playera from "../assets/jasonBlack.webp"
import "./style.css"


const Cart = () => {
    return(
        <>
        <article className="mainCart" >
        <h3>Cart</h3>
        <CartProduct name="Nombre del producto 1" quantity="" image={Playera}/>
        </article>
        </>
    )
}

export default Cart;