import {useState, useEffect} from "react";
import Project5 from "../Project/Project6";


const url = "https://course-api.com/react-tabs-project";

const Project6 = () => {
    const [value, setValue] = useState(0);
    const [text, setText] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchApi = async () => {
        const res = await fetch(url)
        const req = await res.json()
        setText(req);
        setLoading(false)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    if (loading) {
        return (
            <>
            <h2>Loading...</h2>
            </>
        )
    }
    const {title, dates, duties, company} = text[value]
    return (
      <>
      {text.map((person, index) => {
         return (
             <button onClick = {() => setValue(index)}>{person.company}</button>
         )
      })}
        <h2>{title}</h2>
        <h3>{company}</h3>
        <h3>{dates}</h3>
        <h4>{duties}</h4>
      </>
    )
}
export default Project6;