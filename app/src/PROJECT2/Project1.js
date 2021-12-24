import React, { useState, useEffect } from "react";

const Project1Clone1 = () => {
    const [text, setText] = useState(Data);
    return (
        <>
            <header>Total Birthday {text.length}</header>
            <Header text={text}  setText={setText} />
            <button onClick = {() => setText([])}>REMOVE ALL </button>
        </>

    )
}
const Header = ({text, setText}) => {
    const Remove = (id) => {
        let remove = text.filter((person) => person.id !== id)
        setText(remove)
    }
   return (
       <>
       {text.map((person) => {
           const {id, name} = person;
           return (
               <>
               <h3>{name}</h3>
               <button onClick = {() => Remove(id)}>Remove </button>
               </>
           ) 
       })}
       </>
   )
}
const Data = [
    {
        id: 1,
        name: "Shahazim",
    },
    {
        id: 2,
        name: "Dod",
    },
    {
        id: 3,
        name: "Badking",
    }
]
export default Project1Clone1; 