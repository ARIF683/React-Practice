
import React from "react";
import { Link, BrowserRouter, NavLink  } from "react-router-dom";

const Navbar = () => {
    return (
        <>
                <nav>
                    <Link to="/" >HOME </Link>
                </nav>
                <nav>
                    <Link to="/about">
                        ABOUT </Link>
                </nav>
                <nav>
                    <Link to="/people" >
                        PEOPLE
                    </Link>
                </nav>
                </> 
    )
}
export default Navbar;