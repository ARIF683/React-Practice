import {useEffect, useState} from "react";

const UseEffectFetchApi = () => {
    return (
        <Header />
    )
}
const Header = () => {
    const [text, setText] = useState([]);
    const Head = async () => {
        const res = await fetch("https://api.github.com/user")
         setText(await res.json())
    }
    useEffect(() => {
        Head()
    }, [])
    return (
        <div>
        {text.map((person) => {
            return (
                <>
                <h1>{person.login}</h1>
                </> 
            )
        })}
        </div> 
    )
}
export default UseEffectFetchApi;