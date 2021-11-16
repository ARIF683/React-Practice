import React from "react";
import { Link, useParams } from "react-router-dom";
import Data  from "./Data";
import {useState, useEffect} from "react";

const Person = () => {
    const [name, setName] = useState('default name');
    const { id } = useParams();

    useEffect(() => {
        const newPerson = Data.find((person) => person.id === parseInt(id));
        setName(newPerson.name);
    }, []);
    return (
        <>
            <h3>{name}</h3>
            <Link to = "/people" >
                Back To People 
            </Link>
        </>
    )
}
export default Person;