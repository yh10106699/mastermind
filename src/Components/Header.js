import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <div className = "header">
            <h1 className = "headerName">MASTERMIND</h1>
            <a href = "/rule" className = "ruleLink">Game Rules</a>
        </div>
    )
}

export default Header;