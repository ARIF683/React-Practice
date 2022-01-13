import {useState, useEffect} from "react";
import Values from "values.js";


const PROJECT9 = () => {
   const [text, setText] = useState("");
   const [value, setValue] = useState([]);
   const [error, setError] = useState(false);
   const handleSubmit = (e) => {
       e.preventDefault();
       try {
           let colors = new Values(text).all(10)
           setValue(colors)
       } catch (error) {
           setError(true)
       }
   }
   return (
       <>
       <section className = "container" >
           <h3 className = "h3">Generate Color </h3>
           <form onSubmit ={handleSubmit}>
               <input className = {error ? "error" : null } type = "text" value = {text} onChange = {(e) => setText(e.target.value)} />
               <button className = "btn" type = "submit">Generate</button>
           </form>
       </section>
       <section className = "colors">
           {value.map((item, index) => {
               return (
                   <Colors {...item} key = {index} index = {index} hexColor = {item.hex} />
               )
           })}
       </section>
       </>
   )
}

const Colors = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const hexValue = `#${hexColor}`;
    const bg = rgb.join(",")

    useEffect(() => {
        let timeout = setInterval(() => {
            setAlert(false)
        }, 3000)
        return () => clearInterval(timeout)
    }, [])
    return (
        <article className = "color" style = {{backgroundColor: `rgb(${bg})`}}
         onClick = {() => {
             setAlert(true)
             navigator.clipboard.writeText(hexValue)
         }}>
            <p className = "percent-value">{weight}%</p>
            <p className = "color-value">{hexValue}</p>
            {alert && <p className = "alert">Copied to Clipboard</p>}
        </article>
    )
}

export default PROJECT9;