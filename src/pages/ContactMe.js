import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import {CardDeck, Card, CardText, CardBody, CardLink, Button} from 'reactstrap'

const ContactMe = () =>{
    const [modalOpen, setModal] = useState(false);
    const toggle = () => {setModal(!modalOpen)}
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
                            Feel free to use the form below.
                        </CardText>
                    <CardLink target="_blank" href="https://www.linkedin.com/in/joshuapeavler/">LinkedIn</CardLink>
                    <CardLink target="_blank" href="https://github.com/jpeavler">Github</CardLink>
                    <CardText>Email: joshuaapeavler@gmail.com</CardText>
                    <Button color="primary" onClick={toggle} block>Open Contact Form</Button>
                    <ContactForm modalOpen={modalOpen} toggle={toggle}/>
                    </CardBody>
                </Card>
            </CardDeck>
        </>
    )
}

export default ContactMe;