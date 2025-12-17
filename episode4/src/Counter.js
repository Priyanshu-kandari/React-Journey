import { useState } from "react";

function Counter(){

    const [Count,setCount] = useState(0)

    return(
        <div className="counter">
            <button onClick={()=>{
                setCount(Count+1)
            }}>Increase</button>
            <button onClick={()=>{
                setCount(Count-1)
            }}>Decrease</button>
            <button onClick={()=>{
                setCount(0)
            }}>Set to 0</button>
            {Count}
        </div>
    )
}

export default Counter