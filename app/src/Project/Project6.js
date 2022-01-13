import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";


const url = "https://course-api.com/react-tabs-project";

const Project5 = () => {
   const [job, setJob] = useState([])
   const [value, setValue] = useState(0);
   const [loading, setLoading] = useState(true)

   const fetchJobs = async () => {
      const reponse = await fetch(url)
      const newJobs = await reponse.json()
      setJob(newJobs)
      setLoading(false)
   }

useEffect(() => {
   fetchJobs()
}, [])
if (loading) {
   return (
      <h2>Loading...</h2>
   )
}
const { id, title, dates, duties, company } = job[value]
return (
   <>
      <header>EXPERIENCE</header>
      {job.map((item, index)=> {
         return (
            <button onClick = {() => setValue(index)}>{item.company}</button>
         )
      })}
      <h2>{title}</h2>
      <h3>{dates}</h3>
      <h4>{company}</h4>
      <h5>{duties}</h5>
   </>
)
}
export default Project5;