import React from 'react';
import NavBar from './NavBar';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    CardLink
} from 'reactstrap'

const Projects = () =>{
    return(
        <>
            <NavBar/>
            <h2>Projects</h2>
            <div className="projects">
            <Card>
                <CardImg top src="/assets/gameCollectionProject.png" alt="Game Collection Project"/>
                <CardBody>
                    <CardTitle>Game Collection</CardTitle>
                    <CardText>
                    A website that allows users to view, create, edit, or delete descriptions of games in a game collection. The Video Games tab is
                    the only functional page as I plan to add additional game collections in the future.
                    </CardText>
                    <CardLink href="https://game-collection-jpeavler2.herokuapp.com/">Deployed Project Link</CardLink>
                    <CardLink href="https://github.com/jpeavler/video-games-api">Github Link</CardLink>
                </CardBody>
            </Card>
            </div>
        </>
    )
}

export default Projects;