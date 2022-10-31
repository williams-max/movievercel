import React from "react";
import { Link ,NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">Sports</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"   to="/about">Movie </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/contact">Movie Cartoons</NavLink>
                        </li>
                    </ul>

                </div>

                <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
            </div>
        </nav>
    )
}
export default Navbar;