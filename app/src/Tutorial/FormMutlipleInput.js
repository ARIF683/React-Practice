import { useState, useEffect } from "react";

const FormMultipleInput = () => {
    return (
        <>
            <Header />
        </>
    )
}
const Header = () => {
    const [text, setText] = useState({ name: "", email: "" })
    const [person, setPerson] = useState([]);

    const Change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setText({ ...text, [name]: value })
    }
    const Head = (e) => {
        e.preventDefault();
        if (text.name && text.email) {
            const Person = { ...text, id: new Date().getTime().toString() }
            setPerson([...person, Person])
            setText({ name: "", email: "" })
        }
        else {
            alert("No Item Added")
        }
    }
    const Headers = (id) => {
        const remove = person.filter((person) => person.id !== id)
        setPerson(remove)
    }
    return (
        <>
            <form >
                <input type="text" value={text.name} name="name" onChange={Change} placeholder="Name" />
                <input type="text" value={text.email} name="email" onChange={Change} placeholder="Email" />
            </form>
            <button type="submit" onClick={Head}>Submit </button>
            {person.map((per) => {
                const { id, name, email } = per;
                return (
                    <div>
                        <h4>{name} </h4>
                        <h6>{email}</h6>
                        <button onClick={() => Headers(id)}>Remove </button>
                    </div>
                )
            })}
        </>
    )
}
export default FormMultipleInput;