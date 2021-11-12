import { useState, useEffect, useDebugValue } from "react";
import './App.css';

function App() {
  return (
    <>
     <Header /> 
    </>
  )
}
const Header = () => {
  const [modal, setModal ] = useState(false)
  const [name, setName] = useState("")
  const [person, setPerson] = useState([])
  const Head = (e) => {
    e.preventDefault();
    if(name) {
      setPerson([...person, name])
      setName("")
    }
    else {
      setModal(true)
      setTimeout(() => {
        setModal(false)

      }, 2000)
    }
  }
  return (
    <>
    {modal && <Modal /> }
    <form >
      <input name = "name" value = {name} onChange = {(e) => setName(e.target.value)} /> 
    </form>
    <button type = "submit"  onClick = {Head}>Submit </button>
    {person.map((peros) => {
      return (
       <h1>{peros}</h1>
      )
    })}
    </> 
  )
}
const Modal = () => {
  return (
    <>
    <h3> Plss Add Your Name And Email </h3> 
    </> 
  )
}
export default App; 