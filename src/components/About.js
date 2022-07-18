import React from 'react';
import Fade from "react-reveal";
import profilePic from "../assets/profilePic.jpg"
import { Button, Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <section id="about">
            <Fade duration={1000}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <img
                                className="profile-pic"
                                src={profilePic}
                                alt="Lisa Profile Pic"
                            />
                            <div className="contact-details">
                                <h2>Contact Me:</h2>
                                <Button className="contact-btn" href="mailto:lmharrison0810@gmail.com" variant="custom-btn" size="sm" >
                                    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ marginRight: "10px" }} /> Email
                                </Button>
                            </div>
                        </Col>
                        <Col className="about-me" xs={12} md={8}>
                            <p>I’m a full-stack software engineer residing within the Northern Virginia Area.  Naturally inquisitive, I discovered coding and ventured down the rabbit hole and never looked back.  </p>
                            <p> I love to get creative and enjoy nothing more than turning complex problems into simple, beautiful and intuitive designs. The ultimate goal is to build applications that users feel they simply cannot live without and never thought they needed. </p>
                            <p>When i’m not pushing pixels and keyboard tapping, you’ll find me navigating the great outdoors hiking across mountains or motorcycling around them.</p>

                            <Button className="download" id="resume" href="" variant="custom" size="sm" >
                                <FontAwesomeIcon icon={faArrowDown} size="xl" style={{ marginRight: "10px" }} /> Resume Download
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        </section >
    );
}

export default About;