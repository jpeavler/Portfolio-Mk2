import React from 'react';
import NavBar from '../components/NavBar';
import data from '../project_data/project.json'
import Game from '../project_data/TicTacToe/TicTacToe'
import '../project_data/TicTacToe/TicTacToe.css'
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
            <h3>Full Stack Projects</h3>
            <CardDeck className="full">{displayFSProjects}</CardDeck>
            <h3>Small Projects</h3>

            <CardDeck>
                <Card outline color="secondary" className="card">
                    <CardBody>
                        <Game/>
                        <CardTitle>React Tic Tac Toe</CardTitle>
                        <CardText>My first project using React, I followed the React tutorial to make this Tic Tac Toe game.</CardText>
                        <CardLink target="_blank" href="">Github Link</CardLink>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    )
}

export default Projects;