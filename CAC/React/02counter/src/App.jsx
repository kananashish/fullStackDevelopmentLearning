import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () => {
    // counter += 1;
    setCounter(counter + 1);
    console.log('value added', counter);
    // counter += 1;
  }

  const removeValue = () => {
    if(counter > 0) setCounter(counter - 1)
    
    console.log(('value removed', counter));
    
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
