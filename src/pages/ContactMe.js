import React from 'react';
import NavBar from '../components/NavBar';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardLink,
    Row,
    Col
} from 'reactstrap'

const ContactMe = () =>{
    return(
        <>
            <NavBar/>
            <h2>Contact Me</h2>
            <Row>
                <Col sm="1"></Col>
                <Col sm="2">
                    <Card>
                        <CardImg src="/assets/ProfilePicture.jpg" alt="Joshua Peavler"/>
                    </Card>
                </Col>
                <Col sm="8">
                    <Card style={{ height: '18rem'}}>
                        <CardBody>
                            <CardText style={{ "text-align": "Left"}}>
                                If you would like to reach out to talk about coding projects, feel free to
                                reach me via Github. If you are interested in networking, feel free to 
                                contact me via LinkedIn or Github. I'm also always open via email as well.
                            </CardText>
                        <CardLink href="https://www.linkedin.com/in/joshuapeavler/">LinkedIn</CardLink>
                        <CardLink href="https://github.com/jpeavler">Github</CardLink>
                        <CardText>Email: joshuaapeavler@gmail.com</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ContactMe;