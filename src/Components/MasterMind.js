import React from "react";
import Header from "./Header";
import "../styles/MasterMind.css";
import Trial from "./Trial";
import Modal from "../Components/Modal";

const color = [
    "#ea3329",
    "#74fafd",
    "#327329",
    "#f1a045",
    "#ea3bf1",
    "#021cef"
];

const INITIAL_STATE = {answer: [], row: 0, result: 0, reset: false}; //result --- 0: not finished, 1: win, 2: lose

class MasterMind extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount() {
        const randomColor = [];
        for (let i = 0; i < 4; i++) {
            randomColor.push(color[Math.floor(Math.random() * 6)]);
        }
        this.setState({...this.state, answer: randomColor});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.reset === true){
            const randomColor = [];
            for (let i = 0; i < 4; i++) {
                randomColor.push(color[Math.floor(Math.random() * 6)]);
            }
            this.setState({...this.state, answer: randomColor, reset: false});
        }
    }


    nextRow = () => {
        this.setState({...this.state, row: this.state.row + 1});
    }

    resetGame = () => {
        this.setState({...INITIAL_STATE, reset: true});
    }

    setResult = (result) => {
        this.setState({...this.state, row: this.state.row + 1, result});
    }

    render() {
        const {row, answer, result, reset} = this.state;
        const zeroToEleven = [...new Array(12).keys()];
        return (
            <div className="MasterMindWrapper">
                <Header/>
                <div className="rowWrapper">
                    {
                        zeroToEleven.map(rowN => <Trial key={rowN} currentRow={row} row={rowN}
                                                        goNextRow={this.nextRow}
                                                        answer={answer}
                                                        setResult={this.setResult}
                                                        reset={reset}/>)
                    }
                </div>
                {
                    result !== 0 && <div className="container-overlay"/>
                }
                {
                    result === 1 && <Modal message="You win." resetGame={this.resetGame}/>
                }
                {
                    result === 2 && <Modal message="You lose." resetGame={this.resetGame}/>
                }

            </div>
        )
    }
}

export default MasterMind;