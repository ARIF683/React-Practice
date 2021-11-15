import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
        <h4>{count}</h4> 
        <button onClick = {() => setCount(count + 1)}>INCREASE</button>
        <button onClick = {() => setCount(count - 1)}>DECREASE</button>
        <button onClick = {() => setCount(0)}>RESET </button>
        </>
    )
}

export default Counter;