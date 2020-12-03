import React from "react";
import "../styles/Rule.css";

const Rule = (props) => {
    return (
        <div className="Wrapper">
            <h1>Game Rules</h1>
            <hr/>
            <p>
                Choose four colors in the next available row and then click on the Check button. The computer will score
                your guess in the following way:
            </p>
            <p>For each guess that is right in both color and position you get a black point.</p>
            <p> For each guess that is right in color but not in position you get a red point.</p>
            <button onClick={() => props.history.push("/")}>Go back</button>
        </div>
    )
}

export default Rule;