import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Fade, Zoom } from "react-reveal";
import profilePic from "../assets/profilePic.jpg"
import { Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <div className='container'>
            <Row className='about justify-content-between p-2 mt-lg-3'>
                <Col md={4} className='text-center p-2'>

                    {/* Image */}

                    <Col className='profile-pic p-1'>
                        <Zoom delay={1050}>
                            <img
                                src={profilePic}
                                alt='Lisa'
                                className='img-fluid '
                                style={{ borderRadius: '10%', border: '5px solid #c4adb7' }}
                            />
                        </Zoom>
                    </Col>
                    <br></br>
                    <Col className='my-2'>

                        {/* Resume */}

                        <div className='download d-flex justify-content-center'>
                            <div className='mx-1'>
                                <Fade bottom delay={800}>
                                    <Button href="https://drive.google.com/file/d/1oreeNGSOJgHf4kkl5-Ry4AJ4mYo8ebDC/view?usp=sharing" variant="custom" size="sm" >
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
                        <Fade bottom delay={600}>
                            <h2 className='about-intro'>Senior Analyst</h2>
                        </Fade>
                        <br></br>
                        <Fade bottom delay={700}>
                            <p className='mb-2 text'>
                                Highly motivated professional and creative problem solver with 10+ years of cumulative experience. A proven record of generating and building relationships, managing projects, creating effective presentations and designing educational strategies which led to the strengthening of Operations & Growth.
                            </p>
                        </Fade>
                        <br></br>
                        <Fade bottom delay={800}>
                            <p className='mb-2 text'>
                                ➙ Highly analytical and process-oriented Data Analyst with in-depth knowledge of database types; research methodologies; and big data capture, curation, manipulation, and visualization. <br></br>
                                ➙ Furnish insights, analytics & business intelligence used to advance opportunity identification, process reengineering, & corporate growth.
                            </p>
                            </Fade>
                            <br></br>
                            <Fade bottom delay={900}>
                                <p className='mb-2 text'>
                                    ➙ Skilled in system analysis, design, workflow architecture, development, testing and maintenance of web-based applications.<br></br>
                                    ➙ Self-motivated web developer with considerable technical skills who possesses self-discipline & the ability to work with a minimum of supervision. <br></br>
                                    ➙ A quick learner who can absorb new ideas, environment & technologies.
                                </p>
                            </Fade>
                            <br></br>
                            <Fade bottom delay={1000}>
                                <NavLink tag='link' className='nav-link touch-link mx-0 p-0' to='/contact'>
                                    <h3 style={{ color: "#e83283" }}>Contact me!</h3>
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
