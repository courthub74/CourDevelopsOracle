import React from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const ColorCodeRadio = () => {
    return (
        <div className='jscolorcode'>

            <Card>

                <Card.Header><h1>Color Code by Radiodial <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <span className='bold'>'Onsite'</span>value is color coded yellow upon selection<span></span> <br></br>
                        <br></br>
                        <span className='bold'>'Instudio'</span>is color coded purple upon selection<span></span> <br></br>
                        <span className='tab5'>You can plug in ANY colors or other CSS settings for this sequence</span> <br></br>

                        <br></br>

                        <div>
                        <p style={{fontSize:'15px'}} className='notes bold'>Both Parts Below:</p>

                        <Accordion style={{fontSize:'10px'}}>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                        <span className='accordian'>Le CSS</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                    <Card.Body>
                                        <span className='bold'>{'<style type="text/css">'}</span> <br></br>
                                        <span className='bold'>.goldy {'{'}</span><br></br>
                                        <span className='tab5 bold'>background-color: #FFD700;</span><br></br>
                                        <span className='bold'>{'}'}</span> <br></br>
                                        <span className='bold'>.prince {'}'}</span><br></br>
                                        <span className='tab5 bold'>background-color: #DDA0DD;</span><br></br>
                                        <span className='bold'>{'}'}</span> <br></br>
                                        <span className='bold'>{'</style>'}</span> <br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'15px'}}>
                                        <span className='accordian'>Le JavaScript</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1" style={{fontSize:'12px'}}>
                                    <Card.Body>
                                        <span className='bold'>{'<script type="text/javascript">'}</span> <br></br>
                                        <span className='bold tab5'>var colorElements = document.querySelectorAll('.color');</span> <br></br>
                                        <span className='bold tab5'>colorElements.forEach(element ={'>'} {'{'}</span> <br></br>
                                        <span className='bold tab10 '>if (element.innerHTML == "OnSite") {'{'}</span> <br></br>
                                        <span className='bold tab15'>element.classList.add('goldy');</span> <br></br>
                                        <span className='bold tab10'>{'}'} else if (element.innerHTML ==</span> <br></br>
                                        <span className='bold tab15'>"InStudio") {'{'}</span> <br></br>
                                        <span className='bold tab10'>element.classList.add('prince');</span> <br></br>
                                        <span className='bold tab10'>{'}'}</span> <br></br>
                                        <span className='bold tab5'>{'});'}</span> <br></br>
                                        <span className='bold'>{'</script>'}</span> <br></br>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                     </div>

                 </Card.Text>


                    
                </Card.Body>
            </Card>

            
            
        </div>
    );
};


