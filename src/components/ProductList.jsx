import ProductCard from "./ProductCard.jsx";

function ProductList({products, images}) {
    return (
        <div style={{display: "flex", gap: "20px"}}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} images={images}/>
            ))}
        </div>
    );
}

export default ProductList;