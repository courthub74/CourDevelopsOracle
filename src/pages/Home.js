import React, {useState}from 'react'
import {Button, Card} from 'react-bootstrap';
import * as GiIcons from 'react-icons/gi';
import './pages.css';

export const Home = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='home card'>
             
            <Card className='card'> 
                <Card.Header>CourDevelops Inc.</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome To the CourDevelops Oracle</Card.Title>
                        <Card.Text>
                        This Oracle contains the sacred coding knowledge and formulas <br></br>
                        to guide employees into the creation of awesome problem solving
                        software <br></br>
                        <br></br>
                        Click on the <GiIcons.GiHamburger to='#' onClick={showSidebar} /> at the top left for the learning materials<br></br>
                        <br></br>
                        </Card.Text>
                        <Button variant="dark"><a href="https://portfolio.courdevelops.com/" target="_blank" 
                         rel="noreferrer" className='white'>Portfolio 📄 lookin' fancy in the pantry</a></Button>
                    </Card.Body>
            </Card>
        </div>
    )
}

