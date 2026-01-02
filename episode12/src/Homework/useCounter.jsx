import { useState } from "react";

export const useCounter = (initialValue = 0) =>{
    const [count,setCount] = useState(initialValue)

    const increase = () => setCount(count+1)

    const decrease = () => setCount(count-1)

    const Reset = () => setCount(0)

    return{count,increase,decrease,Reset}
}