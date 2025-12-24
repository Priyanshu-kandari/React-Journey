import { useState, useEffect } from "react";

function Text(){
    const [text, setText] = useState("")

    useEffect(()=>{
        console.log("COMPONENT MOUNTED")

        return()=>{
            console.log("COMPONENT UNMOUNTED")
        }
    },)

    return(
        <div>
            <input type="text" onChange={(event)=>{setText(event.target.value)}}></input>
            <h1>{text}</h1>
        </div>

        
    )
}

export default Text