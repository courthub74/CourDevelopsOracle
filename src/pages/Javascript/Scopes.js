import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const Scopes = () => {
    return (
        <div className='jsscopes'>

            <Card>

                <Card.Header><h1>Scopes <SiIcons.SiJavascript/></h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <p style={{fontSize:'15px'}} className='notes bold'>JS Scopes 🔭🔭🔭🔭 🔬🔬🔬🔬 exemples below:</p>

                                <Accordion style={{fontSize:'15px'}}>

                                {/* NYC Scope */}
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                                <span className='accordian'>NYC in Scope:</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                            <Card.Body>
                                                <span className='bold'>const city = 'New York City';</span> <br></br>
                                                <br></br>
                                                <span className='bold'>function logCitySkyline() {'{'}</span><br></br>
                                                <span className='tab5 bold'>let skyscraper = 'Empire State Building';</span><br></br>
                                                <span className='tab5 bold'>return 'The stars over the ' + skyscraper + ' in ' + city;</span><br></br>
                                                <span className='bold'>{'{'}</span><br></br>
                                                <br></br>
                                                <span className='bold'>console.log(logCitySkyline())</span><br></br>
                                                <br></br>
                                                <span className='notes'>// ABOVE You’ll notice that the logCitySkyline()</span> <br></br>
                                                <span className='notes tab5'>function is able to access both variables 'city'</span> <br></br>
                                                <span className='notes tab5'>and 'skyscraper' without any problems. In the next</span> <br></br>
                                                <span className='notes tab5'>exercise we’ll consider why would it be preferable</span> <br></br>
                                                <span className='notes tab5'>to have</span> <br></br>
                                                <br></br>
                                                <span className='notes bold'>//Prints:</span> <br></br>
                                                <span className='notes tab5'>The Stars over the Empire State Building</span> <br></br>
                                                <span className='notes tab5'>in New York City</span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                {/* BLOCK Scope */}
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'15px'}}>
                                                <span className='accordian'>Block Scope:</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1" style={{fontSize:'12px'}}>
                                            <Card.Body>
                                                <span className='bold'>const satellite = 'The Moon';</span> <br></br>
                                                <br></br>
                                                <span className='bold'>const galaxy = 'The Milky Way';</span> <br></br>
                                                <br></br>
                                                <span className='bold'>const stars = 'North Star';</span> <br></br>
                                                <br></br>
                                                <span className='bold'>function logCitySkyline() {'{'}</span><br></br>
                                                <span className='tab5 bold'>return 'Night Sky: ' + satellite + ', ' + stars +</span><br></br>
                                                <span className='tab10 bold'>', and ' + galaxy;</span><br></br>
                                                <span className='bold'>{'{'}</span><br></br>
                                                <br></br>
                                                <span className='bold'>console.log(callMyNightSky())</span><br></br>
                                                <br></br>
                                                <span className='notes'>// ABOVE You’ll notice that the function block</span> <br></br>
                                                <span className='notes tab5'>for callMyNightSky() is able to access</span> <br></br>
                                                <span className='notes tab5'>the global variables freely since the variables</span> <br></br>
                                                <span className='notes tab5'>are available to all lines of code in the file</span> <br></br>                                            
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                {/* BLOCK Scope as defined within an 'if' block*/}
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontSize:'15px'}}>
                                                <span className='accordian'>Block Scope as defined within an 'if' block:</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2" style={{fontSize:'12px'}}>
                                            <Card.Body>
                                                <span className='bold'>const logSkyColor = () ={'>'} {'{'}</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>const dusk = true;</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>let color = 'green';</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>if (dusk) {'{'} </span><br></br>
                                                <span className='bold tab10'>let color = 'pink';</span><br></br>
                                                <span className='bold tab10'>console.log(color);</span><br></br>
                                                <span className='notes tab10 pink'>//Pink</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>{'{'}</span><br></br>
                                                <span className='bold tab5'>console.log(color);</span><br></br>
                                                <span className='tab5 green'>//Green</span> <br></br>
                                                <br></br>
                                                <span className='bold'>{'{'}</span><br></br>
                                                <br></br>
                                                <span className='bold'>console.log(color);</span><br></br>
                                                <span className='notes grey'>//ReferenceError</span> <br></br>
                                                <br></br>
                                                <span className='notes'>// ABOVE We create a variable dusk</span> <br></br>
                                                <span className='notes tab5'>inside the logSkyColor() function</span> <br></br>
                                                <span className='notes tab5'>After the if statement, we define</span> <br></br>
                                                <span className='notes tab5'>a new code block with the {'{}'} braces.</span> <br></br>                                            
                                                <span className='notes tab5'>Here we assign a new value to the variable </span> <br></br>                                            
                                                <span className='notes tab5'>color if the if statement is truthy</span> <br></br>                                            
                                                <span className='notes tab5'>Within the if block, the color variable</span> <br></br>                                            
                                                <span className='notes tab5'>holdsthe value 'pink', though outside the</span> <br></br>                                            
                                                <span className='notes tab5'>if block, in the function body, the color</span> <br></br>                                            
                                                <span className='notes tab5'>variable holds the value 'green'. While we</span> <br></br>                                            
                                                <span className='notes tab5'>use block scope we still pollute our namespace</span> <br></br>                                            
                                                <span className='notes tab5'>by reusing the same variable name twice. A </span> <br></br>                                            
                                                <span className='notes tab5'>better practice would be to rename</span> <br></br>                                            
                                                <span className='notes tab5'>the variable inside the block</span> <br></br>                                            
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                {/* SCOPE Review*/}
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{fontSize:'15px'}}>
                                                <span className='accordian'>SCOPE Review:</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3" style={{fontSize:'12px'}}>
                                            <Card.Body>
                                                <span className='notes'>//IN THIS LESSON, you learned about scope</span> <br></br>
                                                <span className='notes tab5'>and how it impacts the accessibility</span> <br></br>
                                                <span className='notes tab5'>of different variables.</span> <br></br>
                                                <br></br>
                                                <span className='notes'>//LETS review the following terms:</span> <br></br>  
                                                <br></br>                                          
                                                <span className='notes tab5'>SCOPE is the idea in programming</span> <br></br>                                            
                                                <span className='notes tab5'>that some variables are accessible/inaccessible </span> <br></br>                                            
                                                <span className='notes tab5'>from other parts of the program.</span> <br></br> 
                                                <br></br>                                           
                                                <span className='notes tab5'>BLOCKS are statements that exist within</span> <br></br>  
                                                <span className='notes tab10'>curly braces {'{}'}</span> <br></br>   
                                                <br></br>                                         
                                                <span className='notes tab5'>GLOBAL SCOPE refers to the context</span> <br></br> 
                                                <span className='notes tab10'>within which</span> <br></br>
                                                <br></br>                                             
                                                <span className='notes tab5'>VARIABLES are accessible to every</span> <br></br> 
                                                <span className='notes tab10'>part of the program</span> <br></br>
                                                <br></br>                                             
                                                <span className='notes tab5'>GLOBAL VARIABLES are variables that</span> <br></br> 
                                                <span className='notes tab10'>exist within global scope</span> <br></br> 
                                                <br></br>                                            
                                                <span className='notes tab5'>BLOCK SCOPE refers to the context</span> <br></br> 
                                                <span className='notes tab10'>within which variables that are accessible</span> <br></br>                                            
                                                <span className='notes tab10'>only within the block they are defined</span> <br></br>
                                                <br></br>                                             
                                                <span className='notes tab5'>LOCAL VARIABLES are variables that exist</span><br></br> 
                                                <span className='notes tab10'>within block scope</span><br></br>
                                                <br></br>                                             
                                                <span className='notes tab5'>GLOBAL NAMESPACE is the space in our code that</span> <br></br>                                            
                                                <span className='notes tab5'>globally scoped information</span> <br></br> 
                                                <br></br>                                            
                                                <span className='notes tab5'>SCOPE POLLUTION is when too many variables</span> <br></br>                                            
                                                <span className='notes tab5'>exist in a namespace or variable names are reused.</span> <br></br>                                            
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


