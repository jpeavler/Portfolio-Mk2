import React from 'react';
import NavBar from '../components/NavBar';

const Resume = () =>{
    return(
        <>
            <NavBar/>
            <h2>Resume</h2>
            <div className="resp-container"><iframe title="resume" src="/assets/Resume.pdf"></iframe></div>
        </>
    )
}

export default Resume;