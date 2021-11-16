import React from "react";
import {Link } from "react-router-dom";

const Error  = () => {
    return (
        <>
        <h3> Oops! Error.Page not found </h3>
        <h1>
            <Link to ="/">
                Back Home 
            </Link>
        </h1>
        </>
    )
}
export default Error;