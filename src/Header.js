import React from "react";
import "./App.css"

function Header() {
    const name = "Саша"
    return (
        <header>
            <h1>Привет, {name}!</h1>
        </header>
    )
}

export default Header;