import {useEffect, useState, } from "react";

const url = "https://course-api.com/react-tours-project";

const Project3Clone = () => {
    const [loading, setLoading] = useState(true)
    const [tour, setTour] = useState([])
    const Not = (id) => {
        let remove = tour.filter((person) => person.id !== id)
        setTour(remove)
    }
    const fetchTour = async () => {
       const res = await fetch(url)
       setLoading(false)
       setTour(await res.json())
    }
    useEffect(() => {
        fetchTour();
    }, [])
    if (loading){
        return (
            <Loading />
        )
    }
    if (tour.length === 0) {
        return (
            <>
        
            <h2>No Tour Left</h2> 
            <button onClick = {fetchTour}>Show Tour</button>
            </>
        )
    }
    return (
        <Tour tour = {tour} Not = {Not} />
    )
}


const Tour = ({tour, Not}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <>
          {tour.map((person) => {
              const {id, name, image, price, info } = person;
              return (
                  <div>
                  <img src = {image} />
                  <header>{name}</header>
                  <h5>{readMore ? info : `${info.substring(0, 202)}`}</h5>
                  <button onClick = {() => setReadMore(!readMore)}>{readMore ? "show less " : "show More "}</button>
                  <p>{price}</p>
                  <button onClick = {() => Not(id)}>NOT INTERESTED</button>
                  </div>
              )
          })}
        </>
    )
}

const Loading = () => {
    return (
        <header>LOADING.....</header>
    )
}
export default Project3Clone;