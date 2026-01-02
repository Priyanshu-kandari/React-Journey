import { useCounter } from "./useCounter"

export const Counter = () => {
    const {count,increase,decrease,Reset} = useCounter()

return(
        <div>
            <p>{count}</p>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={Reset}>set zero</button>
        </div>
    )
}
