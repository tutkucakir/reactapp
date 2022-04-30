import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

//rfc yazarak tab ile oluşturabiliriz 
function Navbar(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add User</Link></li>
                <li><Link to="/projectfiles">Project Files</Link></li>
            </ul>
        </div>
    )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:"Default App"
}



export default Navbar;