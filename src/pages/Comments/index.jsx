import { useEffect, useState } from "react";
import styles from "./Comments.module.scss";
import Modal from "../../components/Modal";

function Comment() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        body: "",
    });
    const [selectedComment, setSelectedComment] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.body) {
            const newComment = {
                id: Date.now(),
                name: formData.name,
                email: formData.email,
                body: formData.body,
            };
            setComments([newComment, ...comments]);
            setFormData({ name: "", email: "", body: "" });
        }
    };
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
                .then((res) => res.json())
                .then((comments) => setComments(comments))
                .finally(() => setLoading(false));
        }, 1000); // chờ 1s r mới fetch - check loading
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Viết bình luận</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter name..." />
                    <input className={styles.input} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
                    <textarea className={styles.textarea} name="body" value={formData.body} onChange={handleChange} placeholder="Enter comment..." rows="3"></textarea>
                    <button className={styles.submitBtn} type="submit">
                        Comment
                    </button>
                </form>

                <h1 className={styles.title}>Comment list:</h1>
                {loading ? (
                    <p className={styles.loading}>Loading...</p>
                ) : (
                    <div className={styles.list}>
                        {comments.map((comment) => (
                            <div key={comment.id} className={styles.comment} onClick={() => setSelectedComment(comment)}>
                                <img className={styles.avatar} src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`} alt={comment.name} />
                                <div className={styles.content}>
                                    <p className={styles.meta}>
                                        <strong>{comment.name}</strong>
                                        <span>({comment.email})</span>
                                    </p>
                                    <p className={styles.body}>{comment.body.length > 100 ? comment.body.substring(0, 100) + "..." : comment.body}</p>
                                    <span className={styles.time}>1h ago</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Modal comment={selectedComment} onClose={() => setSelectedComment(null)} />
        </div>
    );
}

export default Comment;
