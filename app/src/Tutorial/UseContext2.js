import React, {useState, useContext} from "react";

const Context = React.createContext();
const Data = [
    {
        id : 1,
        name : "Arif",
    },
    {
        id : 2,
        name : "Shahazim",
    },
    {
        id : 3,
        name : "Dod",
    }
]
const UseContext2 = () => {
   const [show, setShow] = useState(Data);
   const Headers = (id) => {
       let remove = show.filter((person) => person.id !== id)
       setShow(remove)
   }
   return (
       <>
       <Context.Provider value = {{show , Headers, setShow  }}>
           <Another /> 
       </Context.Provider>
       </> 
   )
}
const Another = () => {
    const a = useContext(Context)
    return (
        <>
        {a.show.map((person) => {
            const {id, name} = person;
            return (
                <>
                <h4>{name} </h4>
                <button onClick = {() => a.Headers(id)}>Remove </button> 
                </> 
            )
        })}
        <button onClick = {() => a.setShow([])}>Clear All </button>
        </> 
    )
}
export default UseContext2;