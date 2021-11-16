import react from "react";
import Data from "./Data";
import {useState} from "react";
import {Link } from "react-router-dom";

const People = () => {
    const [text, setText] = useState(Data)
    return (
        <>
        <h4>People  Page </h4> 
        {text.map((person) => {
            const {id, name} = person;
            return (
                <>
                <h4>{person.name}</h4>
                <Link to ={`/person/${person.id}`} >
                    Learn More 
                </Link>
                </>
            )
        })}
        </> 
    )
}
export default People;