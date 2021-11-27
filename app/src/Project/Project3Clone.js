import {useState} from 'react';

const Data = [
    {
        id: 1,
        name: "Arif",
        job : "Web Developer"
    },
    {
        id : 2,
        name: "shahazim",
        job: "Web developer"
    },
    {
        id: 3,
        name: "BadKing",
        job : "Game developer"
    },
    {
        id : 4,
        name: "Dod",
        job: "Graphic designer",
    }
]

const Project3Clone = () => {
   const [index, setIndex] = useState(0);
   const {name, id, job} = Data[index]
 
   const checkIndex = (number) => {
       if (number > Data.length - 1){
           return 0;
       }
       if (number < 0){
           return Data.length - 1;
       }
       return number;
   }
 
   const Previous = () => {
       setIndex((index) => {
           let newIndex  = index - 1;
           return checkIndex(newIndex)
       })
   }
   const Next = () => {
       setIndex((index) => {
           let newIndex = index + 1
           return checkIndex(newIndex)
       })
   }
   const RandomReview = () => {
       const RandomNumber = Math.floor(Math.random() * Data.length)
       if (RandomNumber === index){
           RandomNumber = index + 1;
       }
       setIndex(checkIndex(RandomNumber))
   }
   return (
       <>
       <h2>{name}</h2>
       <h3>{job}</h3>
       <button onClick = {Previous}>Previous Review</button>
       <button onClick = {Next}>Next Review </button>
       <button onClick = {RandomReview}>Random Review </button>
       </>
   )
}
export default Project3Clone;