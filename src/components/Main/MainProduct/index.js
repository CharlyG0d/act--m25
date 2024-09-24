import "./style.css"

const MainProducts = ({ name, price , image }) =>{

    const handleButtonClick = () =>{
        alert("Agregado al carrito!!!")
    }

    return (
        <>
        <section className="product">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={handleButtonClick}>Agregar al carrito</button>
        </section>
        </>
    )
}

export default MainProducts;