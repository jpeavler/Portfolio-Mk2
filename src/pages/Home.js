import React from 'react';
import NavBar from '../components/NavBar';
import {
    Card, 
    CardText, 
    CardBody,
    CardImg,
    CardDeck
} from 'reactstrap';

const Home = () =>{
    return(
        <>
            <NavBar/>
            <h2>Joshua Peavler</h2>
            <CardDeck className="full">
                <Card body outline color="secondary" className="profile-card">
                        <CardImg className="profile" src="/assets/profile.png" alt="Joshua Peavler"/>
                </Card>
                <Card body outline color="secondary" className="card">
                    <CardBody>
                        <h3>MERN Full Stack Web Developer</h3>
                        <CardText style={{ "textAlign": "Left"}}>
                        Aspiring to become a software developer. Currently studying MERN 
                        (MongoDB, Express, React, Node) full stack web development. Enjoys 
                        problem solving and troubleshooting, especially when helping others. 
                        Hopes to spruce up on C++ and learn other C languages after mastering 
                        JavaScript. Effective at training and teaching in both workplace and school.
                        Studies Japanese via Doulingo on the side. 
                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    )
}

export default Home;