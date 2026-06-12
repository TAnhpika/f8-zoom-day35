import styles from "./Modal.module.scss";

function Modal({ product, comment, onClose }) {
    const data = product || comment;
    if (!data) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>{data.title ?? data.name}</h2>
                    <button className={styles.modalClose} onClick={onClose} aria-label="Đóng">
                        ×
                    </button>
                </div>
                <p className={styles.modalId}>
                    {comment ? `Email: ${data.email}` : `ID: ${data.id}`}
                </p>
                <p className={styles.modalBody}>{data.body}</p>
            </div>
        </div>
    );
}

export default Modal;
