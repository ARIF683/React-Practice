import {useState, useEffect} from "react";

const Data = [
    {id: 1, name: "SHAHAZIM", Job : "Web Developer"},
    {id : 2, name : "Arif", Job : "App Developer"},
    {id:3, name: "Dod", Job:"Graphic Designer"},
    {id:4, name: "Badking", Job : "Game Developer"}
]

const PROJECT3 = () => {
   const [index, setIndex] = useState(0);
   const {id, name, Job } = Data[index];

  const filterIndex = (number) => {
      if (number > Data.length - 1){
          return 0;
      }
      if (number < 0){
          return Data.length - 1;
      }
      return number; 
  }

  const Prev = () => {
      setIndex((index) => {
          let newIndex = index - 1;
          return filterIndex(newIndex)
      })
  }
  const next = () => {
      setIndex((index) => {
          let newIndex = index + 1;
          return filterIndex(newIndex)
      })
  }
  const randomPerson = () => {
    
          let random = Math.floor(Math.random() * Data.length)
          if (random === index) {
           random = index + 1;
          }
          setIndex(filterIndex(random))
 }
  
   return (
    <>
     <h4>{name}</h4>
     <p>{Job}</p>
     <button className = "btn" onClick = {Prev}>Previous</button>
     <button className = "btn"  onClick = {next}>Next </button>
     <button className = "btn" onClick = {randomPerson}>Random Reveiw</button>
    </>
   )
}

export default PROJECT3;