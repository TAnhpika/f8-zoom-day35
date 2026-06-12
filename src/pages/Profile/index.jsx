import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

function Profile() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users/1")
                .then((res) => res.json())
                .then((user) => setUsers([user]))
                .finally(() => setLoading(false));
        }, 2000);
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {loading ? (
                    <div className={styles.loading}>
                        <span className={styles.spinner}></span>Loading...
                    </div>
                ) : (
                    <div className={styles.profileCard}>
                        {users.map((user) => (
                            <div key={user.id}>
                                <div className={styles.profileHeader}>
                                    <h2>{user.name}</h2>
                                    <p>@{user.username}</p>
                                </div>
                                <div className={styles.profileBody}>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>
                                            Email:
                                        </span>
                                        <span className={styles.infoValue}>
                                            {user.email}
                                        </span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>
                                            Phone:
                                        </span>
                                        <span className={styles.infoValue}>
                                            {user.phone}
                                        </span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>
                                            Website:
                                        </span>
                                        <span className={styles.infoValue}>
                                            {user.website}
                                        </span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>
                                            Address:
                                        </span>
                                        <span className={styles.infoValue}>
                                            {user.address.street},{" "}
                                            {user.address.city}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;