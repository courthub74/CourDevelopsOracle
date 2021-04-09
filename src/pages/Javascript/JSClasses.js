import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const JSClasses = () => {
    return (


        <div className='jsscopes'>

                <Card>

                    <Card.Header><h1>Classes <SiIcons.SiJavascript/></h1></Card.Header>

                        <Card.Body>

                            <Card.Text className='texty2'>
                                <div>
                                    <p>JS Classes 🏫:</p> 
                                    are a tool devs use to join <br></br>
                                    a group of objects that have<br></br>
                                    comparable or similar values
                                    <br></br>
                                    <br></br>
                                    <p>So BELOW we'll do a DOG class:</p>

                                    <Accordion style={{fontSize:'15px'}}>

                                    {/* Doggies */}
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                                    <span className='accordian'>The Doggies:</span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                                <Card.Body>
                                                    <span className='bold'>class Dog {'{'}</span> <br></br>                                                 
                                                    <span className='tab5 bold'>constructor(name) {'{'}</span><br></br>
                                                    <span className='tab10 bold'>this._name = name;</span><br></br>
                                                    <span className='tab10 bold'>this._behavior = 0;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='tab5 bold'>get name {'{'}</span> <br></br>                                                 
                                                    <span className='tab10 bold'>return this._name;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='tab5 bold'>get behavior() {'{'}</span> <br></br>                                                 
                                                    <span className='tab10 bold'>return this._behavior;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='tab5 bold'>incrementBehavior() {'{'}</span> <br></br>                                                 
                                                    <span className='tab10 bold'>return this._behavior ++;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='notes bold'>{'//Doing this class we save time'}</span> <br></br>
                                                    <span className='notes tab5'>from having to list each and </span> <br></br>
                                                    <span className='notes tab5'>every dog name by name</span> <br></br>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    {/* Each Dog */}
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'12px'}}>
                                                    <span className='accordian'>If we did each Doggie:</span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1" style={{fontSize:'10px'}}>
                                                <Card.Body>
                                                    <p>Say there was a doggie named Halley:</p><br></br>
                                                    <span className='bold'>let halley = {'{'}</span> <br></br>                                                 
                                                    <span className='tab5 bold'>_name: 'Halley',</span><br></br>
                                                    <span className='tab10 bold'>_behavior: 0,</span><br></br>
                                                    <br></br>
                                                    <span className='tab5 bold'>get name() {'{'}</span> <br></br>                                                 
                                                    <span className='tab10 bold'>return this._name;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='tab5 bold'>get behavior() {'{'}</span> <br></br>                                                 
                                                    <span className='tab10 bold'>return this._behavior;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='tab5 bold'>incrementBehavior() {'{'}</span> <br></br>                                                 
                                                    <span className='tab10 bold'>return this._behavior ++;</span><br></br>
                                                    <span className='tab5 bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='bold'>{'{'}</span><br></br>
                                                    <br></br>
                                                    <span className='blue bold'>{'//To Print:'}</span> <br></br>
                                                    <span className='blue tab5'>const halley = new Dog('Halley');</span> <br></br>
                                                    <span className='blue tab5'>console.log(halley.name);</span><br></br>
                                                    <span className='blue tab5'>{'// Print name value to console'}</span> <br></br>
                                                    <span className='blue tab5'>console.log(halley.behavior);</span><br></br> 
                                                    <span className='blue tab5'>{'// Print behavior value to console'}</span> <br></br>
                                                    <span className='blue tab5'>halley.incrementBehavior();</span><br></br> 
                                                    <span className='blue tab5'>{'// Add one to behavior'}</span> <br></br>
                                                    <span className='blue tab5'>console.log(halley.name);</span><br></br> 
                                                    <span className='blue tab5'>{'// Print name value to console'}</span> <br></br>
                                                    <span className='blue tab5'>console.log(halley.behavior);</span><br></br> 
                                                    <span className='blue tab5'>{'// Print behavior value to console'}</span> <br></br>
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
