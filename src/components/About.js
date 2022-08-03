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
                                style={{ borderRadius: '30%', border: '5px solid #e83283' }}
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
                            <h2 className='about-intro'>Junior Developer</h2>
                        </Fade>
                        <br></br>
                        <Fade bottom delay={700}>
                            <p className='mb-2 text'>
                            Welcome to my site! I’m a junior full-stack developer residing within the Northern Virginia Area currently seeking a position as an entry level developer or an internship/apprenticeship opportunity. In addition, I am always looking to develop my skills and experience and would love to connect with more people and collaborate on projects so feel free to contact me!
                            </p>
                        </Fade>
                        <br></br>
                        <Fade bottom delay={800}>
                            <p className='mb-2 text'>
                                My journey into tech really started during the pandemic when I decided to pursue a course in Data Analytics and completed the Data Analytics and Visualization Certificate from<span style={{ color:  "#e83283"}}> George Washington University</span>. 
                                I have since continued to develop my skills and became a <span style={{ color:  "#e83283" }}>Certified AWS Cloud Practitoner</span> and completed a Fullstack Web and Mobile Development with <span style={{ color:  "#e83283" }}> Nucamp Coding Bootcamp</span>. I also have a Masters from <span style={{ color:  "#e83283"}}>Gloucestershire University, UK</span> and a BA in Music from <span style={{ color:  "#e83283"}}>Cardiff University, UK</span>.
                            </p>
                        </Fade>
                        <br></br>
                        <Fade bottom delay={900}>
                            <p className='mb-2 text'>
                                Currently, I am seeking a position as a Junior Software Developer or an internship/apprenticeship opportunity. Want to collaborate on a project or have an employment opportunity I would love to hear from you!
                            </p>
                        </Fade>
                        <br></br>
                        <Fade bottom delay={1000}>
                            <NavLink tag='link' className='nav-link touch-link mx-0 p-0' to='/contact'>
                                <h3 style={{ color:  "#e83283"}}>Contact me!</h3>
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
