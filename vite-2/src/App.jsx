import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./header"
import Body from "./body"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header src={reactLogo} ></Header>
    <Body src={reactLogo}></Body>
    </div>
  )
}

export default App
