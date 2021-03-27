import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';
import { JSWithIDButtons } from './LISTIdbuttons';

export const JSWithIdentifier = () => {
    return (
        <div className='jsidentifier'>
            <Card>

                <Card.Header><h1>Functions W.Identifier <SiIcons.SiJavascript/></h1></Card.Header>


                <Card.Body>

                        <Card.Text className='texty'>
                            <span className='notes'>// Define a function using and identifier and function expressions</span> <br></br>
                            <span>const calculatearea = function(width, height) {'{'}</span> <br></br>
                            <span className='tab5'>const area = width * height;</span> <br></br>
                            <span className='tab5'>return area</span> <br></br>
                            <span>{'}'}</span> <br></br>
                            <span>console.log(calculatearea(123, 456))</span> <br></br>
                            <br></br>
                            <span className='notes'>// You are using 'calculatearea' as a constant for the actual function 'area'</span> <br></br>
                            <span className='notes bold'>// Prints: 56088</span> <br></br>
                        </Card.Text>

                        <ButtonGroup size="sm">
                            {JSWithIDButtons.map((item, index) => {
                                return (
                                    <ButtonGroup className="jsidbuttons" size="sm" key={index}>
                                        <Button className={item.cName} href={item.url}>
                                            {item.title}
                                        </Button>
                                    </ButtonGroup>
                                )
                            })}
                        </ButtonGroup>

                </Card.Body>
                
            </Card>
            
        </div>
    )
}

