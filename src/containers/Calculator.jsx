import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { box } from "@mui/system";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  function clear(e) {
    setNum(0);
  }

  function porcentagem() {
    setNum(num / 100);
  }

  function changeSign() {
    setNum(-num);
  }

  function operatorHandler(e) {
    var operatorInPut = e.target.value;
    setOperator(operatorInPut);
    setOldNum(num);
    setNum(0);
  }

  function calculate(){
    if(operator === "/"){
        setNum(parseFloat(oldNum) / parseFloat(num));
    }

    if(operator === "x"){
        setNum(parseFloat(oldNum) * parseFloat(num));
    }

    if(operator === " - "){
        setNum(parseFloat(oldNum) - parseFloat(num));
    }

    if(operator === "+"){
        setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div>
      <box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="result">{num}</h1>
          <box m={10} />
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="x">x</button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">-</button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">+</button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value=".">
            .
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  );
}
