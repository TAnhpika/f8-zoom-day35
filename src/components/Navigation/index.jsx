import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/counter",
        title: "Counter",
    },
    {
        to: "/todo",
        title: "Todo List",
    },
    {
        to: "/profile",
        title: "Profile Card",
    },
    {
        to: "/products",
        title: "Product List",
    },
    {
        to: "/comments",
        title: "Comment System",
    },
    {
        to: "/weather",
        title: "Weather App",
    },
    {
        to: "/buttons",
        title: "Button Components App",
    },
];

function Navigation() {
    return (
        <nav>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            to={item.to}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;