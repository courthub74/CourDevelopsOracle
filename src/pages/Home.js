import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './pages.css';

export const Home = () => {
    return (
        <div className='home card'>
             
            <Card className='card'> 
                <Card.Header>CourDevelops Inc.</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome To the CourDevelops Oracle</Card.Title>
                        <Card.Text>
                        This Oracle contains the sacred coding knowledge and formulas <br></br>
                        to guide employees into the creation of awesome problem solving
                        software.
                        </Card.Text>
                        <Button variant="dark"><a href="https://portfolio.courdevelops.com/" target="_blank" 
                         rel="noreferrer" className='white'>Portfolio 📄</a></Button>
                    </Card.Body>
            </Card>
        </div>
    )
}

