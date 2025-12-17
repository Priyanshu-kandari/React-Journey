import './App.css';
import {useState} from "react"

function App() {
  const [inputvalue, setinputvalue] = useState("")
  const handleInput = (e) =>{
        setinputvalue(e.target.value)
      }
  return(
    <div className="App">
      <input type='text' onChange={handleInput}/>
      {inputvalue}
    </div>
  );
}

export default App;
