import "./calculator.css"
import React, {useEffect, useState} from 'react';

function App() {
  const [input, setInput] = useState("0");
  const [preState, setPreState] = useState("")
  const [curState, SetCurState] = useState("")
  const [operator, setOperator] = useState(null);
  const [result, SetResult] = useState(false);

  // handle input
  const inputNum = inp => {
    if (curState.includes(".") && inp.target.innerText ===".") return
    if (result) {
      setPreState("")
    }
    if (curState) {
      SetCurState(pre => pre + inp.target.innerText)
    }
    else {
      SetCurState(inp.target.innerText)
    }
    //setInput(input.concat(input.target.name)) 
  }

  // update input when curState changes
  useEffect(() => {setInput(curState)}, [curState])
  // 0 case
  useEffect(() => {setInput("0")}, [])
  // clear button
  const clear = () => {
    setPreState("")
    SetCurState("")
    setInput("")
  }
  // backspace
  const backspace = () => {
    // delete one char
    // input will update by useEffect()
    setInput(input.slice(0,-1))
    setPreState(input.slice(0,-1))
    SetCurState(curState.slice(0,-1))
  }
  // Operations
  const opType = (op) => {
    // perform calculations in background
    SetResult(false)
    setOperator(op.target.innerText)
    if (curState === "") return
    if (preState !== "") { // check if preState not empty
      evaluate()
    }
    else {
      setPreState(curState) // preState = curState
      SetCurState("")
    }
  }
  // evaluate
  const evaluate = (e) => {
    if (e?.target.innerText === "="){
      SetResult(true)
    }
    let calculation
    switch (operator) {
      case "/":
        calculation = String(parseFloat(preState) / parseFloat(curState))
        break
      case "*":
        calculation = String(parseFloat(preState) * parseFloat(curState))
        break
      case "-":
        calculation = String(parseFloat(preState) - parseFloat(curState))
        break
      case "+":
        calculation = String(parseFloat(preState) + parseFloat(curState))
        break
      default:
        return
    }
    setPreState(calculation)
    SetCurState("")
    setInput("")
  }

  

  return (
    <div className="calc-grid">
      <input type="text" className="text-input" value={input!==""||input==="0"? input : preState} placeholder="0"/>
      <button className="c1" name="AC" onClick={clear}>AC</button>
      <button className="c2" name="DEL" onClick={backspace}>DEL</button>
      <button className="c2" name="/" onClick={opType}>/</button>
      <button className="d1" name="7" onClick={inputNum}>7</button>
      <button className="d1" name="8" onClick={inputNum}>8</button>
      <button className="d1" name="9" onClick={inputNum}>9</button>
      <button className="d1" name="*" onClick={opType}>*</button>
      <button className="e1" name="4" onClick={inputNum}>4</button>
      <button className="e1" name="5" onClick={inputNum}>5</button>
      <button className="e1" name="6" onClick={inputNum}>6</button>
      <button className="e1" name="-" onClick={opType}>-</button>
      <button className="f1" name="1" onClick={inputNum}>1</button>
      <button className="f1" name="2" onClick={inputNum}>2</button>
      <button className="f1" name="3" onClick={inputNum}>3</button>
      <button className="f1" name="+" onClick={opType}>+</button>
      <button className="g1" name="0" onClick={inputNum}>0</button>
      <button className="g1" name="." onClick={inputNum}>.</button>
      <button className="h1" name="=" onClick={evaluate}>=</button>
    </div>
  );
}

export default App;
