import React, {useState} from "react"
import { Fade, Zoom } from "react-reveal";
import ProjectCard from './ProjectCard'
import { Container, Row } from 'react-bootstrap'
import data from "../data"

function Portfolio() {
    const [items, setItems] = useState(data)
    
    return (
        <Container className="portfolio">
            <Zoom delay={300}><h1>Current Projects:</h1></Zoom>
            <br></br>
        
                <Row xs={1} md={3} className="g-4">
                    {items.map((project, index) => (
                       <ProjectCard project={project} key={project.id}/>
                    ))}
                </Row>
           
        </Container>
    )

}

export default Portfolio;