import React from "react"
import Slide from "react-reveal";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Container, Col, Row } from "react-bootstrap"
// import './Skills.css';

function Skills() {
    return (
        <section id="skills">
            <Container>
                <Slide left duration={1300}>
                    <Row>
                        <Col xs={6} md={4}>
                            <h1>SKILLS</h1>
                        </Col>
                        <Col xs={12} md={8}>
                            <div>
                                <h2>SKILL 1</h2>
                                <ProgressBar variant="success" animated now={65} style={{height:"40px"}} />
                            </div>
                            <div>
                            <h2>SKILL 2</h2>
                                <ProgressBar variant="primary" animated now={45} style={{height:"40px"}} />
                            </div>
                            <div>
                            <h2>SKILL 3</h2>
                                <ProgressBar variant="warning" animated now={35} style={{height:"40px"}}/>
                            </div>
                            <div>
                            <h2>SKILL 4</h2>
                                <ProgressBar variant="danger" animated now={85} style={{height:"40px"}} />
                            </div>
                            <div>
                                <h2>SKILL 5</h2>
                                <ProgressBar variant="success" animated now={65} style={{height:"40px"}} />
                            </div>
                            <div>
                            <h2>SKILL 6</h2>
                                <ProgressBar variant="primary" animated now={45} style={{height:"40px"}} />
                            </div>
                        </Col>
                    </Row>
                </Slide>
            </Container>
        </section>
    )
}

export default Skills;