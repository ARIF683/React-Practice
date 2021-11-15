import {useState, useEffect, useContext } from "react";

const PropDrilling  = () => {
    const [text, setText] = useState(0)
    const Head = () => {
        setText(1)
    }
    return (
        <First  text={text} Head = {Head} />
    )
}
const First = ({text, Head}) => {
    return (
        <Second text = {text} Head = {Head} /> 
    )
}
const Second = ({text, Head}) => {
    return (
        <>
        <h1> {text}</h1>
        <button onClick = {Head}>Change </button>
        </> 
    )
}

export default PropDrilling;