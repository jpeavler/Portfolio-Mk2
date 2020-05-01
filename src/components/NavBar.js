import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar
} from 'reactstrap';

const NavBar = () =>{
    return(
        <Navbar color="light">
            <Link to='/' className="NavLink">Home</Link>
            <Link to='/Resume' className="NavLink">Resume</Link>
            <Link to='/Projects' className="NavLink">Projects</Link>
            <Link to='/Contact' className="NavLink">Contact Me</Link>
        </Navbar>
    )
}

export default NavBar;