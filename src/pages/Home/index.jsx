import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Chào mừng đến với F8 React Day 35</h1>
                <p className={styles.subtitle}>
                    React homework — chọn chức năng trên menu để bắt đầu.
                </p>
            </div>
        </div>
    );
}

export default Home;
