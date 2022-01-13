import {useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";


const PROJECT2 = () => {
   const [text, setText] = useState([])
   const [loading, setLoading] = useState(true);

   const Not = (id) => {
       const Filter = text.filter((item) => item.id !== id);
       setText(Filter);

   }
  const fet = async () => {
      const res = await fetch(url);
      setText(await res.json());
      setLoading(false);
  }
  useEffect(() => {
      fet()
  }, [])
  if (loading) {
      return (
          <Loading />
      )
  }
  if (text.length === 0){
      return (
          <>
         
          <h3>No Tour Left</h3>
          <button onClick = {fet}>Refresh</button>
          </>
      )
  }
  return (
      <>
      <Tour text = {text} Not = {Not} />
      </>
  )
}

const Loading = () => {
    return (
        <h3>Loading.....</h3>
    )
}

const Tour = ({text, Not}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <>
        {text.map((item) => {
            const {id, name, image, price, info} = item;
            return (
                <>
                <img  src = {image} alt = {name} />
                <div>
                    <h4>{name}</h4>
                    <p>{readMore ? info : `${info.substring(0,200)}`}</p>
                    <button onClick = {() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More"}</button>
                    <p>₹{price}</p>
                </div>
                <button className = "btn" onClick = {() => Not(id)}>Not Interested </button>
                </> 
            )
        })}
        </>
    )
}

export default PROJECT2;