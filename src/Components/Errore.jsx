import React from "react";
import { NavLink } from "react-router-dom";

let Errore=()=>{
    return(
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col text-center">
                    <h1 className="text-info">404 Page Note Found !</h1>
                    <p>Sorry! This page is not exist</p>
                    <NavLink to="/"> Go Back</NavLink>
                </div>
            </div>
        </div>

        </>
    )
}
export default Errore;