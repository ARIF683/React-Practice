import {useState, useEffect} from "react";
import Values from "values.js";


const Project9Clone1 = () => {
   
    const [list, setList ] = useState([]);
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);


    const handle = (e) => {
      e.preventDefault();
      try {
        let colo = new Values(color).all(10)
        setList(colo) 
      } catch (error) {
          setError(true)
      }
    }
    return (
      <>
      <section className = "container">
          <h3>Generate Color</h3>
          <form  onSubmit = {handle}>
              <input  className = {`${error ? "error" : null}`} type = "text" placeholder = "#f15025" value = {color} onChange = {(e) => setColor(e.target.value)} />
              <button className = "btn" type = "submit">Generate</button>
          </form>
      </section>
      <section className = "colors">
          {list.map((item, index) => {
              return (
                  <SingleColor index = {index} {...item} key = {index} hexColor = {item.hex} />
              )
          })}
      </section>
      </>
    )
}
const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const hexValue = `#${hexColor}`;
    const bg = rgb.join(",");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])
    return (
        <article className = "color" style = {{backgroundColor: `rgb(${bg})`}} onClick = {() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
        }}>
            <p className = "percent-value">{weight}%</p>
            <p className = "color-value">{hexValue}</p>
            {alert && <p className = "alert">Copied to Clipboard</p>}

        </article>
    )
}


export default Project9Clone1;