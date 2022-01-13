import { useState, useEffect } from "react";
import Values from "values.js";

const Project9 = () => {
   const [color, setColor] = useState("");
   const [list, setList] = useState([]);
   const [error, setError] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      try {
         let colors = new Values(color).all(10);
         setList(colors);
      } catch (error) {
         setError(true)

      }
   }

   return (
      <>
         <section className="container">
            <h3 className="h3">Generate Color</h3>
            <form onSubmit={handleSubmit}>
               <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' className={`${error ? "error" : null}`} />
               <button type="submit" className="btn" >Generate</button>
            </form>
         </section>
         <section className="colors">
            {list.map((item, index) => {
               return (
                  <>
                     <SingleColor {...item} index={index} key={index} hexColor={item.hex} />
                  </>
               )
            })}
         </section>
      </>
   )
}


const SingleColor = ({ rgb, weight, index, hexColor }) => {
   const [alert, setAlert] = useState(false);

   const bg = rgb.join(",");
   const hexValue = `#${hexColor}`;

   useEffect(() => {
      const timeout = setTimeout(() => {
         setAlert(false)
      }, 3000)
      return () => clearTimeout(timeout)
   }, [alert])
   return (
      <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bg})` }}
         onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
         }}>
         <p className="percent-value">{weight}%</p>
         <p className="color-value">{hexValue}</p>
         {alert && <p className="alert">Copied To Clipboard</p>}
      </article>
   )

}
export default Project9;
