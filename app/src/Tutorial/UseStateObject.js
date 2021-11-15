import {useState} from "react";

const UseStateObject = () => {
    const [text, setText] = useState({name: "Arif", age : 18})
    const Head = () => {
        setText({...text, name : "Shahazim" })
    }
    return (
        <>
        <h2>{text.name}</h2> 
        <h4>{text.age}</h4>
        <button onClick = {Head}>Change Value</button>
        </> 
    )
}

export default UseStateObject;