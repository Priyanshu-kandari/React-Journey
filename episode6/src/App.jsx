import './App.css'
import { useState } from 'react'
import Text from './text'

function App() {
    const [showText, setShowText] = useState(false)

    return(
        <div>

        <button onClick={()=>{
            setShowText(!showText)
        }}>Show text</button>

        {showText && <Text/>}
        </div>
    )
}

export default App
