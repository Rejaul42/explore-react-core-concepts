import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'

function App() {
  const [count, setCount] = useState(0)
  function handelClick() {
    alert('Button 1 click')
  }
  const handelClick3 = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React core concepts</h1>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={() => { alert('Button 2 Click') }}>Click 2</button>
      <button onClick={() => {handelClick3(3)}}>Click button 3</button>
    </>
  )
}

export default App
