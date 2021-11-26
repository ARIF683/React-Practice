import React, {useState, useEffect} from "react";


const Data = [
    {
        id:1,
        name: "Arif",
    },
    {
        id : 2,
        name: "Shahazim",
    },
    {
        id : 3,
        name : "Dod",
    }
]

const Project1 = () => {
    const [text, setText] = useState(Data)
    return (
        <>
        <h4> Today Total Birthday {text.length}</h4> 
        <Header text = {text} setText = {setText} /> 
        <button onClick = {() => setText([])}>Clear All </button>
        </> 
    )
}
const Header = ({text, setText}) => {
    const Head = (id) => {
        let remove = text.filter((person) => person.id !== id)
        setText(remove);
    }
    return (
        <>
        {text.map((person) => {
            
            return (
                <>
                <h4>{person.name}</h4> 
                <button onClick = {() => Head(person.id)}>Clear </button>
                </>
            )
        })}
        
        </>
    )
}
export default Project1;