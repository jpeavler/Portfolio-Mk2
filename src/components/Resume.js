import React from 'react';
import NavBar from './NavBar';

const Resume = () =>{
    return(
        <>
            <NavBar/>
            <h2>This is the Resume Page</h2>
            <iframe title="resume" src="/assets/Resume.pdf" width="80%" height="900px"></iframe>
        </>
    )
}

export default Resume;