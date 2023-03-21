import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Body from "./components/Body.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
