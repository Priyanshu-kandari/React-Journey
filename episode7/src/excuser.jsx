import axios from "axios";
import { useState } from "react";

function GiveExcuse(){
    const[excuse,Setexcuse] = useState("")

    function FamilyExcuse(){
        axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
        .then((res)=>Setexcuse(res.data[0].excuse))
    }

    function OfficeExcuse(){
        axios.get("https://excuser-three.vercel.app/v1/excuse/office/")
        .then((res)=>Setexcuse(res.data[0].excuse))
    }
    function PartyExcuse(){
        axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
        .then((res)=>Setexcuse(res.data[0].excuse))
    }

    return(
        <div>
            <h1>Generate Excuse</h1>
            <button onClick={FamilyExcuse}>Family</button>
            <button onClick={OfficeExcuse}>Office</button>
            <button onClick={PartyExcuse}>Party</button>
            {excuse}
        </div>
    )
}


export default GiveExcuse