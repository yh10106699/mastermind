import React from "react";
import "../styles/Modal.css";

const Modal = (props) => {
    return (
        <div className="modal">
            <h2>{props.message}</h2>
            <button onClick={props.resetGame}>Reset Game</button>
        </div>
    )
}

export default Modal;