import React from "react";
import {Route, Routes} from "react-router-dom";
import AuthContainer from "./Auth/AuthContainer"
import NavBarContainer from "./Nav/NavBarContainer";
import BooksContainer from "./Books/BooksContainer";

const Body = (props) => {
    return (
        <div className="row mt-12">
            <div className="">
                <NavBarContainer/>
                <Routes>
                    <Route path="/auth" element={<AuthContainer/>} />
                    <Route path="/books" element={<BooksContainer/>} />
                </Routes>
            </div>
          
        </div>
    )
}

export default Body;