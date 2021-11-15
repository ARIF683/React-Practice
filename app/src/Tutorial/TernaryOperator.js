import {useState, useEffect} from "react";

const TernaryOperator = () => {
    return (
        <Header /> 
    )
}
const Header = () => {
    const [text, setText] = useState(false)
    return (
        <>
        {text ? "Oops! Error Occured" : "Congratulations No Error Found"}
        <button onClick = {() => setText(!text)}>Show </button>
        </> 
    )
}
export default TernaryOperator;