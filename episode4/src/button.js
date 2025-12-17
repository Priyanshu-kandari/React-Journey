import { useState } from "react";

function Button(){

    const [showText, setshowText] = useState("true")

    return(
        <div className="showHide">
        <button onClick={()=>{
        setshowText(!showText)
        }}> Show/Hide</button>
        {showText && <h1>Hello sir i am Priyanshu Kandari</h1>}
        </div>
        
    )
}

export default Button