import {useState, useEffect} from "react";


const url = "https://course-api.com/react-prop-types-example";
const UseFetch = () => {
   const [text, setText] = useState([])
   const Head = async () => {
       const res = await fetch(url)
       setText(await res.json());
   }
   useEffect(() => {
       Head();
   }, [])
   return (
       <>
       {text.map((person) => {
           const {id, name, image, price} = person;
           return (
               <>
               
               <h4>{name}</h4>
               <h5> $ {price || 9.30 }</h5> 
               </> 
           )
       })}
       </> 
   )
}

export default UseFetch;