import {useState} from "react";


const ComplexCounter = () => {
    const [count, setCount] = useState(0)
    const Head = () => {
       setTimeout(() => {
           setCount((person) => {
               return person + 1;
           })
       }, 2000)
    }
    return (
        <>
        <h3>{count}</h3>
        <button onClick = {Head}>Increase</button>
        </> 
    )
}
export default ComplexCounter;