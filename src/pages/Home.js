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
} from 'reactstrap';

const Home = () =>{
    return(
        <>
            <NavBar/>
            <h2>Home</h2>
            <Row>
                <Col sm="2"></Col>
                <Col sm="8">
                    <Card body outline color="secondary" className="card">
                        <CardBody>
                            <CardText>
                            Aspiring web developer. Learning full stack development at Helio Training.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Home;