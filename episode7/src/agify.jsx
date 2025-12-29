import { useState,useEffect } from "react";
import axios from "axios";

function Age(){
    const [name,setName] = useState("name")
    const [age,setAge] = useState(null)

    const GetAge = ()=>{
        if(!name) return alert("enter a name");

        axios.get(`https://api.agify.io/?name=${name}`)
        .then((res)=> setAge(res.data.age))
        .catch((err)=> console.log(err))
    }


    return(
        <div>
            <input type="text" onChange={(Event)=>{
                setName(Event.target.value)
            }} placeholder="Ex: Priyanshu" />
            <button onClick={GetAge}>Get Age</button>
            {age !== null && <h2>Predicted Age: {age}</h2>}
        </div>
    )
}

export default Age