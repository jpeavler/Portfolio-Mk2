import React from 'react';
import NavBar from '../components/NavBar';
import data from '../project_data/project.json'
import {
    CardDeck,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    CardLink,
} from 'reactstrap';

const Projects = () =>{
    const displayFSProjects = data.projects.map((project) =>{
        return(
            <Card body outline color="secondary" className="card">
                <CardImg top src={project.img} alt={project.alt}/>
                <CardBody>
                    <CardTitle>{project.name}</CardTitle>
                    <CardText>{project.desc}</CardText>
                    <CardLink target="_blank" href={project.depLink}>Deployed Project Link</CardLink>
                    <CardLink target="_blank" href={project.githubLink}>Github Link</CardLink>
                </CardBody>
            </Card>
        )
    })
    return(
        <>
            <NavBar/>
            <h2>Projects</h2>
            <CardDeck>{displayFSProjects}</CardDeck>
        </>
    )
}

export default Projects;