import React from 'react';
import Fade from "react-reveal";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function ProjectCard(props) {
    return (
        <Container id="portfolio">

            <Fade left duration={1000} distance="50px">
                <Row>
                    <Col>
                        <Card className="card--image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/projects/" + props.project.image} />
                            <Card.Body>
                                <Card.Title>{props.project.title}</Card.Title>
                                <Card.Text>{props.project.description}</Card.Text>
                                <Button className="project--button" href={props.project.url} variant="primary">View Live &rarr;</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Fade>
        </Container >
    )
}

export default ProjectCard;