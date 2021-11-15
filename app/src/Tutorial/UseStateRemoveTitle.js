import {useState} from "react";

const UseStateRemoveTitle = () => {
    const [text, setText] = useState("Random title");
    const Head = () => {
        if (text === "Random title"){
            setText("Hello Arif")
        }
        else {
            setText("Random title")
        }
    }
    return (
        <>
        <h4>{text}</h4> 
        <button onClick={Head}>Change Title </button>
        </> 
    )
}
export default UseStateRemoveTitle;