import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

//rfc yazarak tab ile oluşturabiliriz 
function Navbar({title}){
    return(
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-4 p-2">
            <a href="/" className="navbar-brand">{title}</a>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/add" className="nav-link">Add User</Link></li>
                <li className="nav-item"><Link to="/projectfiles" className="nav-link">Project Files</Link></li>
            </ul>
        </nav>
    )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:"Default App"
}



export default Navbar;