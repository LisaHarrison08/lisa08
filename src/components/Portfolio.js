import React, {useState} from "react"
import ProjectCard from './ProjectCard'
import { Container, Row } from 'react-bootstrap'
import data from "../data"

function Portfolio() {
    const [items, setItems] = useState(data)
    
    return (
        <Container className="portfolio">
            <h1>Check out my work</h1>
        
                <Row xs={1} md={3} className="g-4">
                    {items.map((project, index) => (
                       <ProjectCard project={project} key={project.id}/>
                    ))}
                </Row>
           
        </Container>
    )

}

export default Portfolio;