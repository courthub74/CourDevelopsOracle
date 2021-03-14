import React from 'react'
import './pages.css';
import * as SiIcons from 'react-icons/si'
import { Card } from 'react-bootstrap';
import { FaIcons } from 'react-icons/fa';


export const WhileLoop = () => {
    return (
        <div className="whileloop">
            <Card>
                <Card.Header><h1>While Loop <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text className="texty">
                            <span>i = 0</span><br></br>
                            <span className='tab5'>while i {">"} 50:</span><br></br>
                            <span className='tab10'>print(i)</span><br></br>
                            <br></br>
                            <span className="bold"># If you run this without adding increments 'i' will stay as zero</span><br></br>
                            <span className='tab5 bold'>and print forever because it will be less than zero forever</span><br></br>
                            <br></br>
                            <span className="bold">So you add:</span><br></br>
                            <span className='tab10'>i = i + 1</span><br></br>
                            <br></br>
                            <span className="bold"># NOW it will add one everytime till it reaches 49 and then stop</span><br></br>
                            <span className='tab10'># i = i + 5</span><br></br>
                            <span className='tab10'># i = i + 10</span>
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    );
};


