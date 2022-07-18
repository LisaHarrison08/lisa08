import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Fade, Zoom } from "react-reveal";
import profilePic from "../assets/profilePic.jpg"
import { Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <div className='about'>
            <Row className='justify-content-between p-2 mt-lg-3'>
                <Col md={4} className='text-center p-2'>

                    {/* Image */}

                    <Col className='profile-pic p-1'>
                        <Zoom delay={750}>
                            <img
                                src={profilePic}
                                alt='Lisa'
                                className='img-fluid '
                                style={{ borderRadius: '15%', border: '5px solid #e83283' }}
                            />
                        </Zoom>
                    </Col>
                    <Col className='my-2'>

                        {/* Resume */}
                       
                        <div className='d-flex justify-content-center'>
                            <div className='mx-1'>
                                <Fade bottom delay={800}>
                                    <Button className="download" id="resume" href="" variant="custom" size="sm" >
                                        <FontAwesomeIcon icon={faArrowDown} size="xl" style={{ marginRight: "10px" }} /> Resume Download
                                    </Button>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Col>

                {/* ABOUT  */}
                <Col md={8} className='mt-md-0 px-0 p-md-2'>
                    <div className='m-2' >
                        <Fade bottom delay={800}>
                            <h2 className='about-intro'>Fullstack Developer.</h2>
                        </Fade>
                        <Fade bottom delay={800}>
                            <p className='mb-2 text'>
                            I’m a full-stack software engineer residing within the Northern Virginia Area.  Naturally inquisitive, I discovered coding and ventured down the rabbit hole and never looked back.
                            </p>
                        </Fade>
                        <Fade bottom delay={800}>
                            <p className='mb-2 text'>
                                I have a Certificate in Fullstack Web and Mobile Development from <span className='text-primary'>
                                    Nucamp Coding Bootcamp</span>, a Frontend Web Developer Certificate from <span className='text-primary'>George Washington University</span>,
                                a Cloud Practitioner Certificate <span className='text-primary'>AWS</span> and a BA in Music <span className='text-primary'>Cardiff University, UK</span>.
                            </p>
                        </Fade>
                        <Fade bottom delay={800}>
                            <p className='mb-2 text'>
                                Currently, I am seeking a position as a Junior Software Developer. Want to collaborate on a project or have an employment opportunity I would love to hear from you!
                            </p>
                        </Fade>
                        <Fade bottom delay={800}>
                            <NavLink tag='link' className='nav-link touch-link mx-0 p-0' to='/contact'>
                                <u><em><h3>Contact me!</h3></em></u>
                            </NavLink>
                        </Fade>
                    </div>
                </Col>
            </Row>
            <hr className='mx-auto my-4 text-primary col-8' />
        </div>
    );
}

export default About;
