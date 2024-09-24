import { useState, useEffect } from "react";
import "./style.css"


const CartProduct = ({ name, image }) => {
    const [quantity, setQuantity ] = useState(0);
    const [ isNegative, setIsNegative ] = useState(false);

    useEffect(() => {
        if(quantity === 0) {
            setIsNegative(true)
            console.log("No puedes tener numeros negativos")
        } else {
            setIsNegative(false)
        }
    })

    const handleAddClick = () => {
        setQuantity((prev)=> prev + 1) 
    }

    const handleDeleteClick = () => {
        setQuantity((prev) => prev - 1)
    }

    return(
        <>
        <section className="cartProduct">
            <img src={image} />
            <p>{name}</p>
            <em>{quantity}</em>
            <div>
                <button onClick={handleAddClick}>+</button>
                <button onClick={handleDeleteClick} disabled={isNegative} >-</button>
            </div>
        </section>
        </>
    )
}

export default CartProduct;