import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav>
            <Link to='/' className="NavLink">
                <img src="/favicon.ico" height="30px"/>
            </Link>
            <Link to='/Resume' className="NavLink">Resume</Link>
            <Link to='/Projects' className="NavLink">Projects</Link>
            <Link to='/Contact' className="NavLink">Contact Me</Link>
        </nav>
    )
}

export default NavBar;