import { Link } from "react-router-dom";
//import data from "../data";
import axios from "axios";
import { useEffect, useState } from "react";

function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/products");
            setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Featured Products</h1>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.slug}>
                        <Link to={`/product/${product.slug}`}>
                            <img src={product.image} alt={product.name}></img>
                        </Link>
                        <div className="product-info">
                            <Link to={`/product/${product.slug}`}>
                                <p>{product.name}</p>
                            </Link>
                            <Link to={`/product/${product.slug}`}>
                                <p>{product.price}</p>
                            </Link>
                            <button className="addCartButton">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default HomeScreen;
