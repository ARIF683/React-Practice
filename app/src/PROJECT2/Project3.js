import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Data = [
    {
        id: 1, name: 'Arif', Job: "Web App Developer"
    },
    {
        id: 2, name: "Shahazim", Job: "Web Developer",
    },
    {
        id: 3, name: "Dod", Job: "Graphic designer",
    },
    {
        id: 4, name: "Badking", Job: "Game Developer",
    }
]

const Project3Clone3 = () => {
    return (
        <>
            <header>OUR REVIEWS</header>
            <br></br>
            <Review />
        </>
    )
}
const Review = () => {
    const [index, setIndex] = useState(1);
    const {id, name, Job} = Data[index]
   
    const Check = (number) => {
        if (number > Data.length - 1){
            return 0;
        }
        if (number < 0){
            return Data.length - 1;
        }
        return number;
    }

    const left = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return Check(newIndex)
        })
    }
   const Right = () => {
       setIndex((index) => {
           let newIndex = index + 1;
           return Check(newIndex)
       })
   }
   const Random = () => {
      let random = Math.floor(Math.random() * Data.length)
      if (random === index){
          return index + 1;
      }
      setIndex(Check(random));
   }
    return (
        <>
            <h3>{name}</h3>
            <h4>{Job}</h4>
            <button onClick = {left}>< FaChevronLeft /></button>
            <button onClick = {Right}><FaChevronRight /></button>
            <button onClick = {Random}>RANDOM REVIEW </button>
        </>
    )
}


export default Project3Clone3;