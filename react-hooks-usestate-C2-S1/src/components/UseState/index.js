import './UseState.css';
import { useState } from 'react'; 

const UseState = () => { 
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState('0');

  return (
    <div className='state'>
      <div className="state" className={theme}>
        <h1>UseState Component</h1>
        <button onClick = { () => setTheme(theme === 'dark'? 'light' : 'dark')}>Dark/Light</button>
        {/* <button onClick = { () => setTheme('light')}>Light</button> */}
        <h2>{count}</h2>
        <button onClick = { () => setCount((prevCount)=> prevCount + 1)}>
          Increment
        </button>
        <button onClick = {() => setCount((prevCount)=> prevCount - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseState;