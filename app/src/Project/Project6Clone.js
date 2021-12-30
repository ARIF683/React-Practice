import {useState, useEffect} from "react";
import Project5 from "./Project6";


const url = "https://course-api.com/react-tabs-project";

const Project6Clone = () => {
   const [text, setText] = useState([]);
   const [value, setValue] = useState(0)
   const [loading, setLoading] = useState(true);
   

   const fetchApi = async () => {
       const res = await fetch(url);
        setText(await res.json())
       setLoading(false)
   }
   useEffect(() => {
       fetchApi()
   }, [])
   if (loading){
       return (
           <h3>Loading....</h3>
       )
   }
   const {title, dates, duties, company} = text[value]
   return (
       <>
       {text.map((item, index) => {
         return (
             <>
             <button onClick = {() => setValue(index)}>{item.company}</button>
             </>
         )
       })}
       <h2>{title}</h2>
       <h3>{company}</h3>
       <h3>{dates}</h3>
       <h4>{duties}</h4>
       </>
   )
}
export default Project6Clone;