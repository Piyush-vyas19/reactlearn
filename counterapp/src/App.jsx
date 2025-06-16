import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]  = useState(0);
const addvalue = () => {
  counter++;
  setCounter(counter);

  console.log("Counter value after addition: ", counter);
}
const subvalue = () => {
  counter--;
  setCounter(counter);
  
  console.log("Counter value after subtraction: ", counter);
}

return (
  <>
  <h1>chai aur react</h1>
  <h2>counter value {counter}</h2>
  <button onClick = {addvalue}>
    Add Value
  </button>
  <button onClick = {subvalue}>
    Subtract Value
  </button>
  </>

)
}

export default App
