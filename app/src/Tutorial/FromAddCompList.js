import { useState, useReducer, useEffect } from "react";

const FormAddCompList = () => {
    return (
        <Header />
    )
}
const Header = () => {
    const [name, setName] = useState("")
    const [person, setPerson] = useState([])
    const Head = (e) => {
        e.preventDefault();
        const Person = { name }
        if (name) {
            setPerson((person) => {
                return [...person, Person]
            })
            setName("")
        }
    }
    return (
        <>
            <form>
                <input type="text" name="name" value={name} placeholder = "Name"  onChange={(e) => setName(e.target.value)} />
            </form>
            <button type="submit" onClick={Head}>Submit </button>
            {person.map((per) => {
                const { name } = per;
                return (
                    <>
                    <h1>{name} </h1>
                    </> 
                )
            })}
        </>
    )
}

export default FormAddCompList;