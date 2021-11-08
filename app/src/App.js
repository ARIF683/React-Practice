import { useState, useEffect } from "react";
import './App.css';

function App() {
  return (
    <>
     <Header /> 
    </>
  )
}
const Header = () => {
  const [api, setApi ] = useState([]);
  
  const Head = async  () => {
    const res = await fetch('https://api.github.com/users')
    setApi(await res.json())
  }
  useEffect(() => {
    Head() 
  })
  return (
    <>
    {api.map((person) => {
      return (
        <>
        <h1>{person.login}</h1>
        <img src = {person.avatar_url}></img>
        </> 
      )
    })}
    </> 
  )
}
export default App;
