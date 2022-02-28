import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const MakeElementsDissapear = () => {
    return (
        <div className='jselementsdissapear'>

<Card>

<Card.Header><h1 className='black'>Make Elements Dissapear <SiIcons.SiJavascript/></h1></Card.Header>

    <Card.Body>

        <Card.Text className='texty2'>
            <div>
                <p>To make doors dissapear we will start with 4 Doors as list items in HTML</p>
                <p></p>
                <p></p>

                <ol>
                < li class="list-group-item go" id="item1">{'< li class="list-group-item go" id="item1">Door#1< /li >'}</li>
                    < li class="list-group-item go" id="item1">{'< li class="list-group-item go" id="item1">Door#2< /li >'}</li>
                    < li class="list-group-item go" id="item1">{'< li class="list-group-item go" id="item1">Door#3< /li >'}</li>
                    < li class="list-group-item go" id="item1">{'< li class="list-group-item go" id="item1">Door#4< /li >'}</li>
                </ol>


            {/* CSS */}
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                            <span className='accordian'>THE CSS</span>
                        </Accordion.Toggle>
                    </Card.Header>
                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                <Card.Body>
                                        <span className='bold'>{'< style type="text/css" >'}</span> <br></br>
                                        <span className='bold'>.hidden {'{'}</span> <br></br>
                                        <span className='bold'>display: none;</span> <br></br>
                                        <span className='bold'>{'}'}</span> <br></br>
                                        <span className='bold'>{'< /style >'}</span> <br></br>
                                </Card.Body>

                            </Accordion.Collapse>
                    </Card>

            </Accordion>


            {/* LET and CONST */}
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                            <span className='accordian'>JAVASCRIPT</span>
                        </Accordion.Toggle>
                    </Card.Header>
                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                <Card.Body>

                                        <span className='bold'>{'< script type="text/javascript" >'}</span> <br></br>
                                        <span className='bold'>const allElements = document.querySelectorAll(".go");</span> <br></br>
                                        <span className='blue'>{'// make a constant variable called "allElements" from each desired list item'}</span><br></br>
                                        <span className='blue'>that query selects from the class 'go'. The list items</span><br></br>
                                        <br></br>
                                        <span className='bold'>allElements.forEach(element ={'>'} {'{'}</span> <br></br>
                                        <span className='blue'>{'// then declare that for each element of the'}</span><br></br>
                                        <span className='blue'>constant variable do BELOW</span><br></br>
                                        <br></br>
                                        <span className='bold'>if (element.innerHTML == "None") {'{'} </span> <br></br>
                                        <span className='blue'>{'// if the elements innerHTML is "None"'}</span> <br></br>
                                        <br></br>
                                        <span className='bold'>element.classList.add('hidden');</span><br></br>
                                        <br></br>
                                        <span className='bold'>{'}'}</span> <br></br>
                                        <span className='bold'>{'});'}</span> <br></br>
                                        <span className='bold'>{'< /script >'}</span> <br></br>
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

