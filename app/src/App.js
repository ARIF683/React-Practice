import { useState, useEffect, useDebugValue } from "react";
import './App.css';

function App() {
  return (
    <>
     <Header /> 
    </>
  )
}

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