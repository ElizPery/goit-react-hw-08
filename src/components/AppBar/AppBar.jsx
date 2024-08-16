import css from "./AppBar.module.css";

import Navigation from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";

const AppBar = () => {
    return (
        <header className={css.header}>
            <Navigation />
            <AuthNav />
        </header>
    )
}

export default AppBar;