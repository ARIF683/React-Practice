import { useState, useEffect, useReducer } from "react";

const Apps = () => {
	return (
		<>
		  <Header /> 
		</>
	)
}
const Modal = ({modalContent, removeModal }) => {
	useEffect(() => {
		setTimeout(() => {
		  removeModal()
		}, 2000)
	})
	return (
		<>
		<h1>{modalContent}</h1> 
		</> 
	)
}
const reducer = (state, action) => {
    if (action.type === "ADDED_ITEM"){
		const Add = [...state.person, action.payload]
		return {...state , person : Add, Modal : true, modalContent : "Item Added"}
	}
	if (action.type === "NO_ITEM"){
		return {...state, Modal : true, modalContent : "No Item Added "}
	}
	if (action.type === "NO_MODAL") {
		return {...state , Modal : false}
	}
	if (action.type === "REMOVE_ITEM"){
		const Remove_Item = state.person.filter((person) => person.id !== action.payload)
		return {...state , person : Remove_Item}
	}
}
const defaultState = {
	person: [],
	Modal : false,
	modalContent : "",
}
const Header = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);
	const Head = (e) => {
		e.preventDefault();
		if (name) {
           const add = {id: new Date().getTime().toString(), name}
		   dispatch ({type: "ADDED_ITEM" ,payload : add })
		   setName("")
		}
		else {
        dispatch({type : "NO_ITEM"})
		}
	}
	const removeModal = () => {
		dispatch({type: "NO_MODAL"})
	}
	return (
		<>
		{state.Modal && <Modal modalContent = {state.modalContent} removeModal = {removeModal} /> }
		<form >
			<input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} /> 
		</form>
		<button onClick = {Head}>Add</button>
		{state.person.map((per) => {
			const {id, name} = per;
			return (
				<>
				<h3>{name }</h3>
				<button onClick = {() => dispatch({type: "REMOVE_ITEM", payload : id })}>Remove </button>
				</> 
			)
		})}
		</> 
	)
}
export default  Apps;