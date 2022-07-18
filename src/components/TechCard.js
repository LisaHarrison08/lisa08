import React from 'react';
import Fade from "react-reveal";
import { Card, Col, Container, Row } from 'react-bootstrap'


function TechCard(props) {
    return (
        <Container id="portfolio">
            <Fade right duration={1000} distance="50px">          
                <Row>
                    <Col className="tech--items">
                        <Card className="tech--image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/tech/" + props.project.image} />
                            {/* <Card.Body>
                                <Card.Title>{props.project.description}</Card.Title>
                            </Card.Body> */}
                        </Card>
                    </Col>
                </Row>
            </Fade>
        </Container >
    )
}

export default TechCard;