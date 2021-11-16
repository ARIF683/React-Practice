import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import React from "react";

import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Navbar from "./Navbar";
import Person from "./Person";
const ReactRouter = () => {
    return (
        <BrowserRouter>
            
           <Navbar />
            <Routes>

                <Route  path="/"  element={<Home />} />
                <Route  path="/about" element={<About />} />
                <Route path="/people" element={<People />} />
                <Route path = "*" element = { <Error />} />
               <Route path = "/person/:id" element = {<Person />} />
            </Routes>
        </BrowserRouter>

    )
}
export default ReactRouter;