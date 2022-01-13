import { useState, useEffect } from "react";

const url = 'https://course-api.com/react-tabs-project'

const PROJECT6 = () => {
    const [text, setText] = useState([]);
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchApi = async () => {
        const res = await fetch(url);

        setText(await res.json())
        setLoading(false)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    if (loading) {
        return (
            <h3>Loading....</h3>
        )
    }
    const { id, title, dates, duties, company } = text[value];
    return (
        <>
       {text.map((item, index) => {
           return (
               <>
               <button onClick = {() => setValue(index)}>{item.company}</button>
               </>
           )
       })}
            <h3>{title}</h3>
            <h4>{dates}</h4>
            <h4>{company}</h4>
            <h4>{duties}</h4>


        </>

    )
}

export default PROJECT6;