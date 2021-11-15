import {useState, useEffect} from "react";

const HideShow = () => {
    return (
        <Header />
    )
}
const Header = () => {
    const [text, setText] = useState(false)
    return (
        <>
        {text && <ShowWidth />}
        <button onClick = {() => setText(!text)}>Show/Hide </button>
        </> 
    )
}
const ShowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const Func = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize' , Func)
        return () => {
            window.removeEventListener('resize', Func)
        }
    })
    return (
        <h1>Window Size : {width}</h1> 
    )
}
export default HideShow; 