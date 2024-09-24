import MainProducts from "../MainProduct";
import "./style.css";

const FilteredList = ({ search }) => {
    const product = [
        {
            id: "1",
            image: "https://antifashion.com.mx/cdn/shop/files/gifsweb-05.jpg?v=1698435461&width=823",
            name: "Mochila Skate Candy Red",
            price: "699.00",
            category: "mochila"
            
            
        },
        {
            id: "2",
            image: "https://antifashion.com.mx/cdn/shop/files/WhatsApp_Image_2024-06-10_at_6.02.38_PM.jpg?v=1718128727&width=823",
            name: "Gorra Rainbow Blue",
            price: "549.00",
            category: "gorra"
        },
        {
            id: "3",
            image: "https://antifashion.com.mx/cdn/shop/files/10dontoverthinknegrob.jpg?v=1691102002&width=823",
            name: "Playera dont overthink Black",
            price: "299.00",
            category: "playera"
        },
        {
            id: "4",
            image: "https://antifashion.com.mx/cdn/shop/files/05CATZILLANEGROB.jpg?v=1708467081&width=823",
            name: "Playera Catzilla",
            price: "299.00",
            category: "playera"
        },
        {
            id: "5",
            image: "https://antifashion.com.mx/cdn/shop/files/wds.jpg?v=1691519335&width=823",
            name: "Mochila Raibow",
            price: "499.00",
            category: "mochila"
        },
        {
            id: "6",
            image: "https://antifashion.com.mx/cdn/shop/files/03JASONNEGROB.jpg?v=1710201209&width=823",
            name: "Playera Jason Black",
            price: "299.00",
            category: "playera"
        },
        {
            id: "7",
            image: "https://antifashion.com.mx/cdn/shop/files/image_d911c05c-c438-4ea8-9718-4891c182c5ac.jpg?v=1685408073&width=823",
            name: "Gorra Advisory",
            price: "549.00",
            category: "gorra"
        },
        {
            id: "8",
            image: "https://antifashion.com.mx/cdn/shop/files/PhotoRoom_034_20230417_110019p.m..jpg?v=1683048780&width=823",
            name: "Gorra Confetti",
            price: "549.00",
            category: "gorra"
        },
        {
            id: "9",
            image: "https://antifashion.com.mx/cdn/shop/files/2.jpg?v=1691519650&width=823",
            name: "Mochila Antiroshi",
            price: "499.00",
            category: "mochila"
        },
    ]
    const filteredProducts = search
        ? product.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
        : product;

    return (
        <>
            <article className="product-container">
                {filteredProducts.map((product) => {
                    const { name, price, image, id } = product;
                    return (
                        <MainProducts name={name} price={price} image={image} key={id} />
                    );
                })}
            </article>
        </>
    );
};

export default FilteredList;