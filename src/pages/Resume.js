import React from 'react';
import NavBar from '../components/NavBar';

const Resume = () =>{
    return(
        <>
            <NavBar/>
            <h2>Resume</h2>
            <iframe title="resume" src="/assets/Resume.pdf"></iframe>
        </>
    )
}

export default Resume;