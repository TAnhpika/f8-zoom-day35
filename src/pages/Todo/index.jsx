import { useState } from "react";
import styles from "./Todo.module.scss";

function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: inputValue,
                    completed: false,
                },
            ]);
            setInputValue("");
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggle = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const totalTasks = todos.length;
    const completedTasks = todos.filter((todo) => todo.completed).length;
    const remainingTasks = totalTasks - completedTasks;

    return (
        <div className={styles.page}>
            <div className={styles["app-card"]}>
                <div className={styles.header}>
                    Tổng: {totalTasks} task(s), Hoàn thành: {completedTasks} task(s), Còn lại: {remainingTasks}
                </div>
                <form onSubmit={handleSubmit} className={styles["todo-form"]}>
                    <input value={inputValue} onChange={handleInputChange} placeholder="Nhập task mới..." />
                    <button type="submit">Thêm</button>
                </form>

                {todos.length === 0 ? (
                    <p className={styles.empty}>Chưa có task nào. Hãy thêm task đầu tiên!</p>
                ) : (
                    <ul className={styles["todo-list"]}>
                        {todos.map((todo) => (
                            <li key={todo.id} className={styles["todo-item"]}>
                                <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} style={{ marginRight: "8px" }} />
                                <span className={todo.completed ? styles.completed : ""}>{todo.text}</span>
                                <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: "16px" }}>
                                    Xóa
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TodoApp;
