import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  //let counter = 15

  const addvalue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
  
    }

    const removeValue = () => {
      setCounter(counter - 1)
    }
    
  return (
    <>
      <h1> Let's Rock</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addvalue}>Add value</button>
      <br />
      <button>removeValue {counter}</button>
      <p><footer>: {counter} </footer></p>
    </>
  )
}

export default App
