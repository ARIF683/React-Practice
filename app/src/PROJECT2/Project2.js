import React, { useState, useEffect } from "react";


const url = "https://course-api.com/react-tours-project";

const Project2Clone2 = () => {
    const [tour, setTour] = useState([]);
    const [loading, setLoading] = useState(true)

    const ShowApi = async () => {
        const res = await fetch(url)
        setTour(await res.json())
        setLoading(false)
    }
    useEffect(() => {
        ShowApi()
    }, [])
    const Not = (id) => {
        let remove = tour.filter((person) => person.id !== id)
        setTour(remove)
    }
    if (loading) {
        return (
            <>
                <header>LOADING...</header>
            </>
        )
    }
    if (tour.length === 0) {
        return (
            <>
                <h1>No Tour Left</h1>
                <button onClick={ShowApi}>SHOW PREVIOUS TOURS </button>
            </>
        )
    }
    return (
        <>
            <Tour tour={tour} Not={Not} />
        </>
    )
}

const Tour = ({ tour, Not }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            {tour.map((person) => {
                const { id, name, image, price, info } = person;
                return (
                    <>
                        <h1>{name}</h1>
                        <h2>{price}</h2>
                        <h3>{readMore ? info : `${info.substring(0, 200)}...` }</h3>
                        <button onClick = {() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More"}</button>
                        <img src={image} />
                        <button onClick={() => Not(id)}>NOT INTERESTED </button>
                    </>
                )
            })}
        </>
    )
}


export default Project2Clone2; 