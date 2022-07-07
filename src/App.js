import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Count from './Count';

function App(props) {

  const [count, setCount] = useState(0);

  const countPlus = () => {
    if(count<20) {
      setCount(count + 1);
    }
  }

  const countMinus = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>220705 CaseStudy 2주차 React Intro. Counter 실습</p>
      <p>{count}</p>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
      <p>Props:</p>
      <Count style={{ backgroundColor: 'blue' }}></Count>
      <p style={{ backgroundColor: 'yellow' }}>{props.count}dd</p>
    </div>
  );
}

export default App;

