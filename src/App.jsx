import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const InNum = () => {
    setCount(count + 1);
  };
  return(
      <>
      <h1 className='count'>{count}</h1>
      <button onClick={InNum} className='button'>Click Me</button>
      </>
  )
};

export default App;
