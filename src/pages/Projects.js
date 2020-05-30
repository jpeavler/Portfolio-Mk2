import React from 'react';
import NavBar from '../components/NavBar';
import data from '../project_data/project.json'
import Game from '../project_data/TicTacToe/TicTacToe'
import DiceBag from '../project_data/Dice/components/DiceBag'
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
                        <CardTitle>React Tic Tac Toe</CardTitle>
                        <CardText>My first project using React, I followed the React tutorial to make this Tic Tac Toe game. The buttons allow the user to transport back in time to a specific move.</CardText>
                        <CardLink target="_blank" href="https://github.com/jpeavler/Intro-to-React-Tutorial">Github Link</CardLink>
                        <Game/>
                    </CardBody>
                </Card>
                <Card outline color="secondary" className="card">
                    <CardBody>
                        <CardTitle>Dice with Context</CardTitle>
                        <CardText>Created using React, this applet allows users to make as many dice as they want with as many sides as they want. This is my first project I made to utilize Context. Feel free to make and roll your own.</CardText>
                        <CardLink target="_blank" href="https://github.com/jpeavler/Dice-React-Context">Github Link</CardLink>
                        <DiceBag/>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    )
}

export default Projects;