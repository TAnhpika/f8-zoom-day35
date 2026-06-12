import styles from "./Layout.module.scss";

function Layout({children}) {
    return <main className={styles.main}>{children}</main>
} 

export default Layout;