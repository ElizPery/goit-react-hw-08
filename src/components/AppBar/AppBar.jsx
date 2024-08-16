import css from "./AppBar.module.css";

import Navigation from "../Navigation/Navigation";

const AppBar = () => {
    return (
        <header className={css.header}>
            <Navigation />
        </header>
    )
}

export default AppBar;