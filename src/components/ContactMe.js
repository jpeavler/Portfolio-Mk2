import React from 'react';
import NavBar from './NavBar';

const ContactMe = () =>{
    return(
        <>
            <NavBar/>
            <h2>Contact Me</h2>
            <a href="https://www.linkedin.com/in/joshuapeavler/">LinkedIn</a>
            <a href="https://github.com/jpeavler">Github</a>
            <p>Email: joshuaapeavler@gmail.com</p>
            <form hidden>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <textarea type="text" placeholder="Message"/>
                <input type="submit" value="Comments"/>
            </form>
        </>
    )
}

export default ContactMe;