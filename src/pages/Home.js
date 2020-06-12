import React from 'react';
import NavBar from '../components/NavBar';
import {
    Card, 
    CardText,
    CardHeader, 
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
                    <CardHeader><h3>MERN Full Stack Web Developer: Seeking Employment</h3></CardHeader>
                    <CardBody>
                        <CardText style={{ "textAlign": "Left"}}>
                        Lifetime learning is my goal. Proficient in MERN (MongoDB, Express, React, Node) full stack web development. Enjoys problem solving and troubleshooting, especially when helping others. In addition to JavaScript, I'm learning Java and C# languages. Effective at training and teaching in both the workplace and in school. Studies Japanese via Doulingo on the side. 
                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    )
}

export default Home;