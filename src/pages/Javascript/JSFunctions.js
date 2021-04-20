import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';
// import { JSFuncTypes } from './FuncTypes';

export const JSFunctions = () => {
    return (
        <div className='jsfunctions'>

            <Card>

                <Card.Header><h1>Functions <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>
                    <Card.Text className='texty2'>
                        A function is a block of code which only runs when it is called.<br></br>

                        You can pass data, known as parameters, into a function.<br></br>

                        A function can return data as a result.
                    </Card.Text >
                    
                    <Card.Text className="texty2 bold">
                        <span>function Hello() {'{'}</span><br></br>
                        <span className='tab5'>console.log("Bonjour")</span><br></br>
                        <span>{'}'}</span>
                    </Card.Text>


                    <div>
                        <p style={{fontSize:'15px'}} className='notes bold'>More JavaScript Functions Below:</p>

                        <Accordion style={{fontSize:'10px'}}>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'// W.Parameters'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                <Card.Body>

                               
                                    <span className='bold'>function groups(gr1, gr2) {'{'}</span> <br></br>
                                    <span className='tab5 bold'>console.log("Favorite Hip-Hop group" + gr1)</span> <br></br>
                                    <span className='tab5 bold'>console.log("Another favorite is:" + gr2)</span> <br></br>
                                    <span className='bold'>{'}'}</span> <br></br>
                                    <span className='bold'>groups("Gang Starr", "Public Enemy")</span> <br></br>
                                    <br></br>
                                    <span className='notes'>{'// Prints: Favorite Hip Hop group: Gang Starr'}</span> <br></br>
                                    <span className='notes tab5'>Another favorite is: Public Enemy</span> <br></br>
                      
                    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'// W.Identifier'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1" style={{fontSize:'12px'}}>
                                <Card.Body>

                                    <span className='notes'>{'// Define a function using an'}</span> <br></br>
                                    <span className='notes tab5'>identifier and function expressions</span> <br></br>
                                    <br></br>
                                    <span className='bold'>const calculatearea = function(width, height) {'{'}</span> <br></br>
                                    <span className='tab5 bold'>const area = width * height;</span> <br></br>
                                    <span className='tab5 bold'>return area</span> <br></br>
                                    <span className='bold'>{'}'}</span> <br></br>
                                    <span className='bold'>console.log(calculatearea(123, 456))</span> <br></br>
                                    <br></br>
                                    <span className='notes'>{'// You are using "calculatearea" as a constant'}</span> <br></br>
                                    <span className='notes tab5'>for the actual function 'area'</span> <br></br>
                                    <br></br>
                                    <span className='notes bold'>{'// Prints: 56088'}</span> <br></br>
                                    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'// Arrow Notation'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2" style={{fontSize:'12px'}}>
                                <Card.Body>
                                    <span className='notes'>{'// Function using arrow notation'}</span> <br></br>
                                    <br></br>
                                    <span className='notes'>{'// This is like same as ABOVE but instead'}</span> <br></br>
                                    <span className='notes tab5'>of using 'function' you use an ={'>'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>const calculate_age = (current_year, birth_year) ={'>'}</span> <br></br>
                                    <span className='tab5 bold'>const age = current_year - birth_year;</span> <br></br>
                                    <span className='tab5 bold'>return age;</span> <br></br>
                                    <span className='bold'>{'}'}</span> <br></br>
                                    <span className='bold'>console.log(calculate_age(2020,1976))</span> <br></br>
                                    <br></br>
                                    <span className='notes bold'>{'// Prints: 44'}</span> <br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'// Multi-Line Arrow Notation'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3" style={{fontSize:'12px'}}>
                                <Card.Body>
                                    <span className='bold'>const quantity = number ={'>'} {'{'}</span> <br></br>
                                    <span className='tab5 bold'>const sum = number + number;</span> <br></br>
                                    <span className='tab5 bold'>return sum;</span> <br></br>
                                    <span className='bold'>{'}'}</span> <br></br>
                                    <span className='bold'>console.log(quantity(4,4))</span> <br></br>
                                    <br></br>
                                    <span className='notes bold'>{'// Prints: 8'}</span> <br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'// Function Declaration'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4" style={{fontSize:'12px'}}>
                                <Card.Body>
                                    <span className='bold'>function volumeOfCube (side) {'{'}</span> <br></br>
                                    <span className='tab5 bold'>return side * side * side;</span> <br></br>
                                    <span className='bold'>{'}'}</span> <br></br>
                                    <span className='bold'>volumeOfCube(5);</span> <br></br>
                                    <br></br>
                                    <span className='notes bold'>{'// Prints: 125'}</span> <br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                    </div>
                </Card.Body>
            </Card>
            
        </div>
    )
}


