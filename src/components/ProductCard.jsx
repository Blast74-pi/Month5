
function ProductCard({product, images}) {
    const randomImage =
        images[Math.floor(Math.random() * images.length)];

    const handleClick = () => {
        console.log(`ID: ${product.id}, Название: ${product.name}`);
    };

    return (
        <div style={{border: "1px solid #ccc", padding: "10px", width: "200px"}}>
            <img src={randomImage} alt={product.name} style={{width: "100%"}}/>
            <h3>{product.name}</h3>
            <button onClick={handleClick}>Buy now</button>
        </div>
    );
}

export default ProductCard;