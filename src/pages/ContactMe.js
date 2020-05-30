import React from 'react';
import NavBar from '../components/NavBar';
import {
    CardDeck,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardLink,
} from 'reactstrap'

const ContactMe = () =>{
    return(
        <>
            <NavBar/>
            <h2>Contact Me</h2>
            <CardDeck className="full">
                <Card body outline color="secondary" className="card">
                    <CardBody>
                        <CardText style={{ "textAlign": "Left"}}>
                            If you would like to reach out to talk about coding projects, feel free to
                            reach me via Github. If you are interested in networking, feel free to 
                            contact me via LinkedIn or Github. I'm also always open via email as well.
                        </CardText>
                    <CardLink target="_blank" href="https://www.linkedin.com/in/joshuapeavler/">LinkedIn</CardLink>
                    <CardLink target="_blank" href="https://github.com/jpeavler">Github</CardLink>
                    <CardText>Email: joshuaapeavler@gmail.com</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    )
}

export default ContactMe;