import { useState, useEffect } from "react";


const Data = [
    { id: 1, name: "Shahazim" },
    { id: 2, name: "Arif" },
    { id: 3, name: "Dod" },
    { id: 4, name: "BadKing" },
]

const PROJECT1 = () => {
    const [text, setText] = useState(Data);

    return (
        <>
            <h4>TOTAL BIRTHDAY {text.length}</h4>
            <Header text={text} setText={setText} />
            <button onClick={() => setText([])}>Clear All </button>
        </>
    )
}

const Header = ({ text, setText }) => {
    const Head = (id) => {
        let remove = text.filter((item) => item.id !== id )
        setText(remove)
    }
    return (
        <>
            {text.map((item) => {
                const { id, name } = item;
                return (
                    <>

                        <h2>{name}</h2>
                        <button onClick={() => Head(id)}>Clear</button>
                    </>
                )
            })}

        </>
    )
}

export default PROJECT1;