import React, { useState, useContext } from "react";

const PersonContext = React.createContext();


const data = [
    { id: 1, name: "Arif" }
]

const UseContext = () => {
    const [text, setText] = useState(0);
    const Head = () => {
        setText(text + 1)
    }
    return (
        <PersonContext.Provider value = {{text: text  , Head: Head  }} >
            <List /> 
        
        </PersonContext.Provider>
    )
}
const List = () => {
    const text = useContext(PersonContext)
    return (
        <>
        <h1>{text.text}</h1> 
        <button onClick = {text.Head}>Increase</button>
        </> 
    )
}

export default UseContext;