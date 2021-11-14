import {useState, useEffect} from "react";

const UseEffectDependencyAndCleanup = () => {
    return (
        <Header />
    )
}
const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const Func = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", Func)
        return  () => {
            window.removeEventListener("resize", Func)
        }
    }, [])
    return (
        <>
        <h1> {width}</h1>
        </> 
    )
}
export default UseEffectDependencyAndCleanup;