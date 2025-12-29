import { useState, useEffect } from 'react'
import './App.css'

function Fetch() {
  const [fact, setFact] = useState("")

  const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div>
      <button onClick={fetchFact}>Fetch fact</button>
      <p>{fact}</p>
    </div>
  )
}

export default Fetch
