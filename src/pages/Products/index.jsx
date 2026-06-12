import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import Modal from "../../components/Modal";

function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
                .then((res) => res.json())
                .then((products) => setProducts(products))
                .finally(() => setLoading(false));
        }, 0);
    }, []); // useEffect lưu lại giá trị của các giá trị trong []. khi 1 ptử thay đổi sẽ chạy lại useEffect

    return (
        <>
            <h1 className={styles.title}>Product List:</h1>
            <ul className={styles.list}>
                {loading && <li>Loading...</li>}
                {products.map((product) => (
                    <li key={product.id} className={styles.item}>
                        <span>{product.id}</span>
                        <h2>{product.title}</h2>
                        <p>{product.body.length > 100 ? product.body.substring(0, 100) + "..." : product.body}</p>
                        <button className={styles.btnDetail} onClick={() => setSelectedProduct(product)}>
                            Xem chi tiết
                        </button>
                    </li>
                ))}
            </ul>
            <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </>
    );
}

export default Product;
