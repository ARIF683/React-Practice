import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Navbar = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}
export default Navbar;