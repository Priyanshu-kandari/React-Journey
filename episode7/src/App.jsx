import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [catFact, setCatFact] = useState("")

  const generateFact = () => {
    axios.get("https://catfact.ninja/fact")
      .then(res => setCatFact(res.data.fact))
  }

  useEffect(() => {
    generateFact()
  }, [])

  return (
    <div>
      <button onClick={generateFact}>Generate cat fact</button>
      <h1>{catFact}</h1>
    </div>
  )
}

export default App
