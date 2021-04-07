import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLradiodial = () => {
    return (
        <div className='htmlradiodial'>

            <Card>

            <Card.Header><h1>HTML Radio Dial <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <p>BELOW makes HTML radio dials:</p>

                            <Accordion>

                                <Card className='texty2'>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {'What is sum of 1 + 1?'}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='texty2'>

                                            <span className='bold'>{'<form>'} </span> <br></br>
                                            <span className='bold notes'>{'<!--Add your first radio button below-->'} </span> <br></br>
                                            <span className='bold tab5'>{'<input type="radio" id="two"'} </span><br></br>
                                            <span className='bold tab15'>{'name="answer" value="2">'} </span> <br></br>
                                            <span className='bold tab5'>{'<label for="two">2</label>'} </span> <br></br>
                                            <span className='bold tab5'>{'<br>'} </span> <br></br>
                                            <br></br>
                                            <span className='bold notes'>{'<!--Add your second radio button below-->'} </span> <br></br>
                                            <span className='bold tab5'>{'<input type="radio" id="eleven"'} </span> <br></br>
                                            <span className='bold tab15'>{'name="answer" value="11">'} </span> <br></br>
                                            <span className='bold tab5'>{'<label for="eleven">11</label>'}</span> <br></br>
                                            <span className='bold'>{'</form>'} </span> <br></br>
                                            <br></br>
                                            <br></br>
                                            <span>What is sum of 1 + 1?</span><br></br>
                                            {/* Add your first radio button below */}
                                                <input type="radio" id="two"
                                                name="answer" value="2"></input>
                                                <label for="two">2</label>
                                                <br></br>
                                                <input type="radio" id="eleven"
                                                name="answer" value="11"></input>
                                                <label for="eleven">11</label>
                                                <br></br>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card className='texty2'>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                    {'On your burger'}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body className='texty2'>

                                        <span className='bold'>{'<p>On your burger</p>'} </span> <br></br>
                                        <span className='bold tab5'>{'<span>'} </span> <br></br>
                                        <span className='bold tab10'>Would you like to add cheese?</span> <br></br>
                                        <span className='bold tab5'>{'</span>'} </span> <br></br>
                                        <span className='bold notes'>{'<!--Add your first radio button below-->'} </span> <br></br>
                                        <span className='bold tab5'>{'<input type="radio" name="cheese"'} </span> <br></br>
                                        <span className='bold tab10'>{'id="yes" value="yes">'} </span> <br></br>
                                        <span className='bold tab10'>{'<label for="yes">Yes</label>'} </span> <br></br>
                                        <span className='bold tab10'>{'</br>'} </span> <br></br>
                                        <span className='bold notes'>{'<!--Add your second radio button below-->'} </span> <br></br>
                                        <span className='bold tab5'>{'<input type="radio" name="cheese"'} </span> <br></br>
                                        <span className='bold tab5'>{'id="no" value="no">'} </span> <br></br>
                                        <span className='bold tab10'>{'<label for="no">No</label>'} </span> <br></br>
                                        <span className='bold'>{'</form>'} </span> <br></br>
                                        <br></br>
                                        <br></br>
                                        <span className='bold'>On your burger:</span><br></br>
                                        <br></br>
                                        <span className=''>Would you like to add cheese?</span>
                                        <br></br>
                                        {/* Add your second radio button below */}
                                            <input type="radio" id="yes"
                                            name="answer" value="yes"></input>
                                            <label for="yes">Yes</label>
                                            <br></br>
                                            <input type="radio" id="no"
                                            name="answer" value="no"></input>
                                            <label for="no">No</label>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br></br>
                            <br></br>
                    {/* Notes to explain above */}
                    <div className='texty2'>
                        <span>ABOVE are two different examples of Radiodial sets one</span> <br></br>
                        <span>to select the correct value of 1 + 1 and another to</span> <br></br>
                        <span>select toppings on a burger</span><br></br>
                    </div>
                    <br></br>
                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}


