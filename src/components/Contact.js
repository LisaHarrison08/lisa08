import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <React.Fragment>
            <Col className='p-0 '>
                <Row>
                    <Col className='d-flex'>
                        <p className='p-1 sm-py-0 mb-0'>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ marginRight: "10px" }} alt='envelope'/> 
                        </p>
                        <a className='p-1 mb-md-1 contact-text-link' href='mailto:lmharrison0810@gmail.com'> lmharrison0810@gmail.com </a>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex'>
                        <p className='p-1 px-1 mb-0'>
                        <FontAwesomeIcon icon={faLocationDot} size="xl" style={{ marginRight: "10px" }} alt='location pin'/>  
                        </p>
                        <p className='p-1 contact-text'> Northern Virginia Area</p>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

export default Contact;