import {useState, useEffect} from "react";

const MultipleReturn = () => {
    return (
        <Header /> 
    )
}
const Header = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [user, setUser] = useState("Default User")
    const url = "https://api.github.com/users/QuincyLarson";
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((user) => {
            const {login} = user;
            setUser(login)
            setLoading(false)
        }).catch((err) => alert(err))
    })
    if (loading){
    return (
        <>
        <h1>Loading.....</h1> 
        </> 
    )
    }
    if (error) {
        return (
            <h1> Oops! Error Occured</h1> 
        )
    }
    return (
        <h3>{user}</h3> 
    )
}
export default MultipleReturn;