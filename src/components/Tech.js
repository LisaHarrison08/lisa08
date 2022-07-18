import React, { useState } from "react"
import TechCard from './TechCard'
import { Container, Col, Row } from 'react-bootstrap'
import Techdata from "../Techdata"

function Tech() {
    const [items, setItems] = useState(Techdata)

    return (
        <Container fluid id="tech" className="tech--content">
          <Row>
                <Col md={4}>
                    <h1>Tech I use:</h1>
                    <hr />
                </Col>
                <Col md={8}>
                    <p>There are so many choices, and I'm always interested in playing around with new technologies, but these are the ones that I dive into regularly</p>
                </Col>
            </Row>  
            <Row xs={1} md={4}>
                {items.map((project, index) => (
                    <TechCard project={project} key={project.id} />
                ))}
            </Row>
        </Container>
    )
}

export default Tech;