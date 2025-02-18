import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 17;

const [counter, setCounter] = useState(20);
// the counter above is a state variable and setCounter is a function to update the state variable 

  // const addValue = () => {
  //  setCounter(counter + 1)
  // };

  const addValue =()=>{
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      {/* variable injection */}
      <h1>React course with Philip {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
