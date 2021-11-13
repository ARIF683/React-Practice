import { useState, useEffect, useReducer } from "react";
import './App.css';

function App() {
  return (
    <>
      <Header />
    </>
  )
  }
const Modal = ({ modalContent, removeModal  }) => {
  useEffect(() => {
    setTimeout(() => {
      removeModal();
    }, 2000)
  })
  return (
    <h1>{modalContent}</h1>
  )
}
const reducer = (state, action) => {
  if (action.type === "ADDED_ITEM") {
    const Add = [...state.person, action.payload]
    return {...state, person: Add, Modal: true, modalContent: "Item Added " }
  }
  if (action.type === "NO_VALUE") {
    return {...state, Modal : true, modalContent : "NO ITEM ADDED "}
  }
  if (action.type === "REMOVE_MODAL") {
    return {...state, Modal : false }
  }
  if (action.type === "REMOVE_ITEM") {
    const Rem = state.person.filter((person) => person.id !== action.payload)
    return {...state, person : Rem}
  }
}
const defaultState = {
  person: [],
  Modal: false,
  modalContent: "",
}
const Header = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const Head = (e) => {
    e.preventDefault();
    if (name) {
      const add = { id: new Date().getTime().toString(), name }
      dispatch({ type: "ADDED_ITEM", payload: add })
      setName("")
    }
    else {
      dispatch({type: "NO_VALUE"})
    }
  }
  const removeModal = () => {
    dispatch({type: "REMOVE_MODAL"})
  }
  return (
    <>
      {state.Modal && <Modal modalContent={state.modalContent} removeModal = {removeModal}  />}
      <form >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <button onClick={Head}>Add </button>
      {state.person.map((per) => {
        return (
          <>
          <h3>{per.name}</h3>
          <button onClick = {() => dispatch({type: "REMOVE_ITEM", payload: per.id })}>Remove </button>
          </> 
        )
      })}
    </>
  )

}
export default App;