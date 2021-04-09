import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const JSBasics = () => {
    return (
        <div className='jsbasics'>

            <Card>

                <Card.Header><h2>Basics <SiIcons.SiJavascript/></h2></Card.Header>

                <Card.Body>
                    <Card.Text>

                    <div>
                        <p style={{fontSize:'15px'}} className='notes bold'>JavaScript Basics grace the Accordian:</p>

                        <Accordion style={{fontSize:'10px'}}>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'//Variables'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                <Card.Body>

                                    <span className='bold'>var firstName = "Carl";</span> <br></br>
                                    <span className='notes'>{'//Created a variable called firstName'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>firstName = "Sal"</span> <br></br>
                                    <span className='notes'>{'//Sal just negated Carl'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>console.log(firstName)</span> <br></br>
                                    <br></br>
                                    <span className='bold notes'>Prints:</span> <br></br>
                                    <span className='notes'>Sal</span> <br></br>
                    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'//Numbers'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1" style={{fontSize:'12px'}}>
                                <Card.Body>

                                    <span className='bold'>2 + 2;</span><span className='notes'> {'//int'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>1.3 + 5.6;</span><span className='notes'> {'//floats'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>2 * 2;</span><span className='notes'> {'//multiply'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>2 / 2;</span><span className='notes'> {'//division'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>2 ** 2;</span><span className='notes'> {'//exponent'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>10 % 2;</span> <span className='notes'> {'//modulus'} {'//divides 10 by 2'}</span> <br></br>                       
                                    <span className='notes tab10'>and gives the remainder {'//returns 0'}</span> <br></br>
                                    <br></br>                       
                                    <span className='bold'>10 % 3;</span><span className='notes'> {'//modulus'} {'//divides 10 by 3'}</span> <br></br>
                                    <span className='notes tab10'>and gives the remainder {'//returns 1'}</span>
                                    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'//Math W.Variables'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2" style={{fontSize:'12px'}}>
                                <Card.Body>
                                    <span className='bold'>num_1 = 1000</span> <br></br>
                                    <span className='bold'>num_2 = 589</span> <br></br>
                                    <span className='bold'>total_1 = num_1 * num_2;</span> <br></br>
                                
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'//Increments'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3" style={{fontSize:'12px'}}>
                                <Card.Body>
                                    <span className='bold'>++total_1;</span> <br></br>
                                    <span className='notes'>{'//INCREMENTS by one avant'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>jam = ++total_1</span> <br></br>
                                    <br></br>                               
                                    <span className='bold'>console.log(jam)</span><br></br>
                                    <br></br>
                                    <span className='bold'>total_1++;</span> <br></br>
                                    <span className='notes'>{'//INCREMENTS by one apres'}</span> <br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'//Assignment Operators'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4" style={{fontSize:'12px'}}>
                                <Card.Body>
                                    <span className='bold'>num_3 = 24;</span> <br></br>
                                    <span className='bold'>num_3 += 4;</span> <br></br>
                                    <br></br>
                                    <span className='notes'>{'// += first ADDS 4 and then'}</span> <br></br>
                                    <span className='notes tab5'>reassigns that total as</span> <br></br>
                                    <span className='notes tab5'>the num_3 variable</span> <br></br>
                                    <span className='notes tab5'>{'//So therefore'}</span> <br></br>
                                    <br></br>
                                    <span className='bold'>num_3 = num_3 + 4;</span> <br></br>
                                    <span className='notes'>{'//and'}</span><br></br>                               
                                    <span className='bold'>num_3 += 4;</span><br></br>
                                    <br></br>
                                    <span className='notes'>{'//are the same thing'}</span> <br></br>
                                    <span className='notes'>{'//the latter is more elegant'}</span> <br></br>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{fontSize:'15px'}}>
                                    <span className='accordian'>{'//Comparison Operators'}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5" style={{fontSize:'12px'}}>
                                <Card.Body>

                                    <span className='notes'>{'// == // to compare two values'}</span> <br></br>
                                    <span className='bold'>4 == 4;</span> <br></br>
                                    <span className='bold'>3 == 4;</span> <br></br>
                                    <span className='bold'>3 != 4;</span> <br></br>
                                    <span className='bold'>3 {'>'} 4;</span> <br></br>
                                    
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            </Accordion>
                    </div>
                        
                    </Card.Text>
                </Card.Body>

            </Card>
            
        </div>
    )
}


