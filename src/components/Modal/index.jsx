import styles from "./Modal.module.scss";

function Modal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>{product.title}</h2>
                    <button className={styles.modalClose} onClick={onClose} aria-label="Đóng">
                        ×
                    </button>
                </div>
                <p className={styles.modalId}>ID: {product.id}</p>
                <p className={styles.modalBody}>{product.body}</p>
            </div>
        </div>
    );
}

export default Modal;