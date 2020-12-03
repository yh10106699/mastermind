import React from "react";
import "../styles/Trial.css";

const INITIAL_STATE = {
    one: {
        background: "#ffffff",
        visibility: false,
    },
    two: {
        background: "#ffffff",
        visibility: false,
    },
    three: {
        background: "#ffffff",
        visibility: false,
    },
    four: {
        background: "#ffffff",
        visibility: false,
    },
    result: [0, 0, 0, 0]
};

const resultColor = ["white", "black", "red"];

class Trial extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    // componentDidMount() {
    //     window.addEventListener("click", )
    // }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.reset) this.setState(INITIAL_STATE);
    }


    changeColor = (id, color) => {
        this.setState({...this.state, [id]: {background: color, visibility: false}});
    }

    toggleColorSelection = (e) => {
        console.log(e.target.closest);
        if (this.props.currentRow !== this.props.row) return;
        this.setState({
            ...this.state,
            [e.target.id]: {...this.state[e.target.id], visibility: !this.state[e.target.id].visibility}
        });
    }

    checkAnswer = () => {
        let answer = this.props.answer;
        let guessResult = [];

        for (let guess in this.state) {
            if (guess === "result") break;
            guessResult.push(this.state[guess].background);
        }

        let countMap = {};
        let blackCount = 0;
        let redCount = 0;
        answer.map((ans, idx) => {
            if (ans === guessResult[idx]) {
                blackCount++;
            } else {
                if (countMap.hasOwnProperty(ans)) {
                    countMap[ans]++;
                } else {
                    countMap[ans] = 1;
                }
            }
        })

        answer.map((ans, idx) => {
            if (ans !== guessResult[idx] && countMap[guessResult[idx]] && countMap[guessResult[idx]] > 0) {
                redCount++;
                countMap[guessResult[idx]]--;
            }
        })

        let result = [];
        for (let i = 0; i < blackCount; i++) result.push(1);
        for (let i = 0; i < redCount; i++) result.push(2);
        while (result.length < 4) result.push(0);
        this.setState({...this.state, result: result});
        this.props.goNextRow();
        if (blackCount === 4) {
            this.props.setResult(1);
            return;
        }

        if (this.props.currentRow === 11) {
            this.props.setResult(2);
        }
    }


    render() {
        console.log(this.props.answer);
        const {one, two, three, four, result} = this.state;
        const valid = (one.background !== "#ffffff" && two.background !== "#ffffff" && three.background !== "#ffffff" && four.background !== "#ffffff");
        return (
            <div className="rowBox">
                <div className="selectBox">
                    <div style={{background: one.background}} id="one" className="circle"
                         onClick={this.toggleColorSelection}>
                        <div style={{visibility: one.visibility ? "visible" : "hidden"}} className="colorSelect"
                             onClick={e => e.stopPropagation()}>
                            <div style={{background: "#ea3329"}} className="colorBox"
                                 onClick={() => this.changeColor("one", "#ea3329")}/>
                            <div style={{background: "#74fafd"}} className="colorBox"
                                 onClick={() => this.changeColor("one", "#74fafd")}/>
                            <div style={{background: "#327329"}} className="colorBox"
                                 onClick={() => this.changeColor("one", "#327329")}/>
                            <div style={{background: "#f1a045"}} className="colorBox"
                                 onClick={() => this.changeColor("one", "#f1a045")}/>
                            <div style={{background: "#ea3bf1"}} className="colorBox"
                                 onClick={() => this.changeColor("one", "#ea3bf1")}/>
                            <div style={{background: "#021cef"}} className="colorBox"
                                 onClick={() => this.changeColor("one", "#021cef")}/>
                        </div>
                    </div>

                    <div style={{background: two.background}} id="two" className="circle"
                         onClick={this.toggleColorSelection}>
                        <div style={{visibility: two.visibility ? "visible" : "hidden"}} className="colorSelect"
                             onClick={e => e.stopPropagation()}>
                            <div style={{background: "#ea3329"}} className="colorBox"
                                 onClick={() => this.changeColor("two", "#ea3329")}/>
                            <div style={{background: "#74fafd"}} className="colorBox"
                                 onClick={() => this.changeColor("two", "#74fafd")}/>
                            <div style={{background: "#327329"}} className="colorBox"
                                 onClick={() => this.changeColor("two", "#327329")}/>
                            <div style={{background: "#f1a045"}} className="colorBox"
                                 onClick={() => this.changeColor("two", "#f1a045")}/>
                            <div style={{background: "#ea3bf1"}} className="colorBox"
                                 onClick={() => this.changeColor("two", "#ea3bf1")}/>
                            <div style={{background: "#021cef"}} className="colorBox"
                                 onClick={() => this.changeColor("two", "#021cef")}/>
                        </div>
                    </div>
                    <div style={{background: three.background}} id="three" className="circle"
                         onClick={this.toggleColorSelection}>
                        <div style={{visibility: three.visibility ? "visible" : "hidden"}} className="colorSelect"
                             onClick={e => e.stopPropagation()}>
                            <div style={{background: "#ea3329"}} className="colorBox"
                                 onClick={() => this.changeColor("three", "#ea3329")}/>
                            <div style={{background: "#74fafd"}} className="colorBox"
                                 onClick={() => this.changeColor("three", "#74fafd")}/>
                            <div style={{background: "#327329"}} className="colorBox"
                                 onClick={() => this.changeColor("three", "#327329")}/>
                            <div style={{background: "#f1a045"}} className="colorBox"
                                 onClick={() => this.changeColor("three", "#f1a045")}/>
                            <div style={{background: "#ea3bf1"}} className="colorBox"
                                 onClick={() => this.changeColor("three", "#ea3bf1")}/>
                            <div style={{background: "#021cef"}} className="colorBox"
                                 onClick={() => this.changeColor("three", "#021cef")}/>
                        </div>
                    </div>
                    <div style={{background: four.background}} id="four" className="circle"
                         onClick={this.toggleColorSelection}>
                        <div style={{visibility: four.visibility ? "visible" : "hidden"}} className="colorSelect"
                             onClick={e => e.stopPropagation()}>
                            <div style={{background: "#ea3329"}} className="colorBox"
                                 onClick={() => this.changeColor("four", "#ea3329")}/>
                            <div style={{background: "#74fafd"}} className="colorBox"
                                 onClick={() => this.changeColor("four", "#74fafd")}/>
                            <div style={{background: "#327329"}} className="colorBox"
                                 onClick={() => this.changeColor("four", "#327329")}/>
                            <div style={{background: "#f1a045"}} className="colorBox"
                                 onClick={() => this.changeColor("four", "#f1a045")}/>
                            <div style={{background: "#ea3bf1"}} className="colorBox"
                                 onClick={() => this.changeColor("four", "#ea3bf1")}/>
                            <div style={{background: "#021cef"}} className="colorBox"
                                 onClick={() => this.changeColor("four", "#021cef")}/>
                        </div>
                    </div>
                </div>
                <div className="verticalLine"/>
                {this.props.currentRow !== this.props.row ?
                    <div className="resultBox">
                        <div style={{background: resultColor[result[0]]}} className="smallCircle"/>
                        <div style={{background: resultColor[result[1]]}} className="smallCircle"/>
                        <div style={{background: resultColor[result[2]]}} className="smallCircle"/>
                        <div style={{background: resultColor[result[3]]}} className="smallCircle"/>
                    </div>
                    :
                    <button disabled={!valid} className="checkButton" onClick={this.checkAnswer}>Check</button>
                }

            </div>
        )
    }
}

export default Trial;