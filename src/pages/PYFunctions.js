import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import './pages.css'
import * as SiIcons from 'react-icons/si';

export const PYFunctions = () => {
    return (
        <div className='pyfunctions'>
            <Card className='card'>
            <Card.Header className="center"><h1 className='black'>Functions <SiIcons.SiPython /></h1>
            </Card.Header>
            <Card.Body>
                <Card.Text className="texty">
                    A function is a block of code which only runs when it is called.<br></br>

                    You can pass data, known as parameters, into a function.<br></br>

                    A function can return data as a result.
                </Card.Text>
                <Card.Text className="texty">
                    <span className='bold'>def my_function():</span><br></br>
                        <span className='tab5 bold'>print("Hello from a function")</span><br></br>
                    <br></br>
                    <span className='notes' style={{fontSize:'12px'}}>#So when 'my-function' is called:</span><br></br>
                    <br></br>
                    <span className='bold'>my_function()</span><br></br>
                    <br></br>
                    <span className='notes bold' style={{fontSize:'12px'}}>#Prints:</span><br></br>
                    <span className='tab5 notes' style={{fontSize:'12px'}}>Hello from a function</span>
                </Card.Text>

                <div class="line"></div>

                <div>
                    <p style={{fontSize:'15px'}} className='notes bold'>more function types:</p>
                    <Accordion style={{fontSize:'10px'}}>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                <span className='accordian'>W.Parameters</span>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0" style={{fontSize:'10px'}}>
                            <Card.Body>

                                <span className='bold'>def classic(gr1,gr2):</span> <br></br>
                                <span className='tab5 bold'>print("One of my fave classic Hip-Hop</span> <br></br>
                                <span className='tab5 bold'>groups is " + gr1)</span> <br></br>
                                <span className='tab5 bold'>print("Another of my fave Hip-Hop</span> <br></br>
                                <span className='tab5 bold'>groups is " + gr2)</span> <br></br>
                                <span className='bold'>classic("UltraMagnetic MC's", "Leaders of the New School")</span> <br></br>
                                <br></br>
                                <span className='bold notes'>Prints:</span> <br></br>
                                <span className='notes'>One of my fave classic Hip-Hop groups is UltraMagnetic MC's</span> <br></br>
                                <span className='notes'>Another of my fave Hip-Hop groups is Leaders of the New School</span> <br></br>
                
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'15px'}}>
                                <span className='accordian'>W.Keyword Argument</span>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1" style={{fontSize:'10px'}}>
                            <Card.Body>
                                <span className='bold'>def classic(gr1="UltraMagnetic MC's",gr2="L.O.N.S."):</span> <br></br>
                                <span className='tab5 bold'>print("One of my fave classic Hip-Hop</span> <br></br>
                                <span className='tab5 bold'>groups is " + gr1)</span> <br></br>
                                <span className='tab5 bold'>print("Another of my fave Hip-Hop</span> <br></br>
                                <span className='tab5 bold'>groups is " + gr2)</span> <br></br>
                                <span className='bold'>classic("UltraMagnetic MC's", "L.O.N.S.")</span> <br></br>
                                <br></br>
                                <span className='bold notes'>Prints:</span> <br></br>
                                <span className='notes'>One of my fave classic Hip-Hop groups is UltraMagnetic MC's</span> <br></br>
                                <span className='notes'>Another of my fave Hip-Hop groups is L.O.N.S.</span> <br></br>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontSize:'15px'}}>
                                <span className='accordian'>W.Returns</span>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2" style={{fontSize:'10px'}}>
                            <Card.Body>
                                <span className='bold'>def mult_589(number):</span> <br></br>
                                <span className='tab5 bold'>return number*589</span> <br></br>
                                <br></br>
                                <span className='notes'>#call it through another variable</span> <br></br>
                                <span className='bold'>result = mult_589(1000)</span> <br></br>
                                <br></br>
                                <span className='bold'>print("If XRP actually goes to $589, I would easily have</span><br></br>
                                <span className='bold'> " + str(result) + " dollars")</span> <br></br>
                                <span></span> <br></br>
                                <br></br>
                                <span className='bold notes'>Prints:</span> <br></br>
                                <span className='notes'>If XRP actually goes to $589, I would easily have (589,000) dollars </span> <br></br>
                                <span className='notes'></span> <br></br>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{fontSize:'15px'}}>
                                <span className='accordian'>Calculate Age</span>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3" style={{fontSize:'10px'}}>
                            <Card.Body>
                                <span className='bold'>def calculate_age(current_yr, birth_yr):</span> <br></br>
                                <span className='tab5 bold'>age = current_yr-birth_yr</span> <br></br>
                                <span className='tab5 bold'>return age</span> <br></br>
                                <span className='bold'>result = mult_589(1000)</span> <br></br>
                                <br></br>
                                <span className='bold'>print(calculate_age(2020, 1976))</span><br></br>
                                <span className='bold'> " + str(result) + " dollars")</span> <br></br>
                                <br></br>
                                <span className='bold notes'>Prints:</span> <br></br>
                                <span className='notes'>44</span> <br></br>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        </Accordion>
                </div>


                {/* <ButtonGroup size="sm">
                        <Button className='smallbuttons'>W/ Parameters</Button>
                        <Button className='smallbuttons'>W/ Keyword Argument</Button>
                        <Button className='smallbuttons'>W/ Returns</Button>
                        <Button className='smallbuttons'>Calc Age</Button>
                        <Button className='smallbuttons'>W/ Global Variable</Button>
                </ButtonGroup> */}

            </Card.Body>
            
            </Card>
            
        
        </div>   
    )
}


