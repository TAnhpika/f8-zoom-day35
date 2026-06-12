import { Route, BrowserRouter as Router, Routes } from "react-router";

import Navigation from "./Navigation";
import Home from "../pages/Home";
import Counter from "../pages/Counter";
import TodoApp from "../pages/Todo";
import Profile from "../pages/Profile";
import Layout from "./Layout";
import layoutStyles from "./Layout/Layout.module.scss";
import Product from "../pages/Products";
import Comment from "../pages/Comments";
import Weather from "../pages/Weather";

function AppRoutes() {
    return (
        <Router>
            <div className={layoutStyles.appShell}>
                <Navigation />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/counter" element={<Counter />}></Route>
                        <Route path="/todo" element={<TodoApp />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/products" element={<Product />}></Route>
                        <Route path="/comments" element={<Comment />}></Route>
                        <Route path="/weather" element={<Weather />}></Route>
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default AppRoutes;
