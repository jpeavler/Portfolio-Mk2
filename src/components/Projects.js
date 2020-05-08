import React from 'react';
import NavBar from './NavBar';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    CardLink,
    Row,
    Col
} from 'reactstrap'

const Projects = () =>{
    return(
        <>
            <NavBar/>
            <h2>Projects</h2>
            <div className="projects">
            <Row>
                <Col sm = "1"></Col>
                <Col sm ="5">
                    <Card>
                        <CardImg top src="/assets/gameCollectionProject.png" alt="Game Collection Project"/>
                        <CardBody>
                            <CardTitle>Game Collection</CardTitle>
                            <CardText>
                            I personally liked how I styled this project, it was my first time I felt that I made a nice looking website.
                            A website that allows users to view, create, edit, or delete descriptions of games in a game collection. The Video Games tab is
                            the only functional page as I plan to add additional game collections in the future. Utilizes a MERN fullstack.
                            </CardText>
                            <CardLink href="https://game-collection-jpeavler2.herokuapp.com/">Deployed Project Link</CardLink>
                            <CardLink href="https://github.com/jpeavler/video-games-api">Github Link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm ="5">
                    <Card>
                        <CardImg top src="/assets/WebDevTerms.png" alt="Web Development Terminology Project"/>
                        <CardBody>
                            <CardTitle>Web Development Terminology</CardTitle>
                            <CardText>
                            I share this project since this is the most robust project I've made functionally speaking.
                            A Computer Science terminology wiki that allows the user to store terms with their own resources.
                            Once a term is added to the wiki, additional resources can be inserted or removed. Allows user to archive and
                            delete archived terms. The two buttons at top allow the user to hide archived and active terms from view.
                            </CardText>
                            <CardLink href="https://learners-catalog.herokuapp.com/">Deployed Project Link</CardLink>
                            <CardLink href="https://github.com/jpeavler/video-games-api">Github Link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default Projects;