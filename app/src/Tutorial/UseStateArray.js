import {useState} from "react";


const Data = [
    {
        id : 1,
        name : "Arif",
    },
    {
        id : 2,
        name : "Shahazim",
    }
]
const UseStateArray = () => {
   const [text, setText] = useState(Data);
   const Head = (id) => {
       let remove = text.filter((person) => person.id !== id);
       setText(remove)
   }
   return (
       <>
       {text.map((person) => {
           const {id , name} = person;
           return (
               <div>
               <h1> {name}</h1>
               <button onClick = {() => Head(id)}>Remove</button>
               </div> 
           )
       })}
       <button onClick = {() => setText([])}>Clear All </button>
       </> 
   )
}

export default UseStateArray;