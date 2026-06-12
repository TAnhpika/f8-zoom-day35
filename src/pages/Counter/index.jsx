import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
    const [count, setCount] = useState(0);
    const counterStateClass =
        count > 0 ? styles.positive : count < 0 ? styles.negative : styles.zero;
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={`${styles.counterValue} ${counterStateClass}`}>
                    {count}
                </h2>
                <button
                    className={styles.increase}
                    onClick={() => setCount(count + 1)}
                >
                    Increase
                </button>
                <button
                    className={styles.decrease}
                    onClick={() => setCount(count - 1)}
                >
                    Decrease
                </button>
            </div>
        </div>
    );
}

export default Counter;
