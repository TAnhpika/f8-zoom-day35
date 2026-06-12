import { Route, BrowserRouter as Router, Routes } from "react-router";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import Counter from "../pages/Counter";
import TodoApp from "../pages/Todo";

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/counter" element={<Counter />}></Route>
                <Route path="/todo" element={<TodoApp />}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
