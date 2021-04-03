import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const ShowHideColors = () => {
    return (
        <div className='jsshowhidecolors'>

                <Card>

                        <Card.Header><h1>ShowHideColors <SiIcons.SiJavascript/></h1></Card.Header>

                            <Card.Body>

                                <Card.Text className='texty2'>

                                    <span>Hiding green blue and red </span> <br></br>
                                    <br></br>
                                    <div>
                                    <p style={{fontSize:'15px'}} className='notes bold'>Parts Below:</p>

                                    <Accordion style={{fontSize:'10px'}}>

                                        {/* CSS */}
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                                    <span className='accordian'>Le CSS</span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                                <Card.Body>
                                                    <span className='bold'>{'<style type="text/css">'}</span> <br></br>
                                                    <span className='bold'>#green {'{'}</span><br></br>
                                                    <span className='tab5 bold'>width: 30%;</span><br></br>
                                                    <span className='bold'>height: 50%;</span> <br></br>
                                                    <span className='tab5 bold'>background-color: green;</span><br></br>
                                                    <span className='bold'>float: left;</span><br></br>
                                                    <span className='bold'>{'}'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'<style type="text/css">'}</span> <br></br>
                                                    <span className='bold'>#blue {'{'}</span><br></br>
                                                    <span className='tab5 bold'>width: 30%;</span><br></br>
                                                    <span className='bold'>height: 50%;</span> <br></br>
                                                    <span className='tab5 bold'>background-color: blue;</span><br></br>
                                                    <span className='bold'>float: left;</span><br></br>
                                                    <span className='bold'>{'}'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'<style type="text/css">'}</span> <br></br>
                                                    <span className='bold'>#red {'{'}</span><br></br>
                                                    <span className='tab5 bold'>width: 30%;</span><br></br>
                                                    <span className='bold'>height: 50%;</span> <br></br>
                                                    <span className='tab5 bold'>background-color: red;</span><br></br>
                                                    <span className='bold'>float: left;</span><br></br>
                                                    <span className='bold'>{'}'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'</style>'}</span> <br></br>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        {/* HTML */}
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{fontSize:'15px'}}>
                                                    <span className='accordian'>Le HTML</span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1" style={{fontSize:'12px'}}>
                                                <Card.Body>
                                                    <span className='bold'>{'< input type="button" value="GREEN"'}</span> <br></br>
                                                    <span className='bold tab5'>{'id="btn1" style="position: absolute;" >'}</span> <br></br>
                                                    <span className='bold'>{'< div id="green" >< /div >'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'< input type="button" value="BLUE"'}</span> <br></br>
                                                    <span className='bold tab5'>{'id="btn1" style="position: absolute;" >'}</span> <br></br>
                                                    <span className='bold'>{'< div id="blue" >< /div >'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'< input type="button" value="RED"'}</span> <br></br>
                                                    <span className='bold tab5'>{'id="btn1" style="position: absolute;" >'}</span> <br></br>
                                                    <span className='bold'>{'< div id="red" >< /div >'}</span> <br></br>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        {/* JAVASCRIPT */}
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{fontSize:'15px'}}>
                                                    <span className='accordian'>Le JavaScript</span>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2" style={{fontSize:'12px'}}>
                                                <Card.Body>
                                                    <span className='bold'>{'<script type="text/javascript">'}</span> <br></br>
                                                    <span className='bold tab5'>document.getElementById("btn1")</span> <br></br>
                                                    <span className='bold tab10'>.addEventListener("click",function()</span> <br></br>
                                                    <span className='bold'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>var</span> <br></br>
                                                    <span className='bold tab10'>box1=document.getElementById("green");</span> <br></br>
                                                    <br></br>
                                                    <span className='bold tab10'>if(box1.style.display=="none")</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab15'>box1.style.display="block";</span> <br></br>
                                                    <span className='bold tab10'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>else:</span> <br></br>
                                                    <span className='bold tab10'>{'{'}</span> <br></br>
                                                    <span className='bold tab15'>box1.style.display="block";</span> <br></br>
                                                    <span className='bold'>{'{'}</span> <br></br>
                                                    <span className='bold'>{'});'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'< script type="text/javascript" >'}</span> <br></br>
                                                    <span className='bold tab5'>document.getElementById("btn2")</span> <br></br>
                                                    <span className='bold tab10'>.addEventListener("click",function()</span> <br></br>
                                                    <span className='bold'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>var</span> <br></br>
                                                    <span className='bold tab10'>box2=document.getElementById("blue");</span> <br></br>
                                                    <br></br>
                                                    <span className='bold tab10'>if(box2.style.display=="none")</span> <br></br>
                                                    <span className='bold tab10'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>box2.style.display="block";</span> <br></br>
                                                    <span className='bold tab15'>{'{'}</span><br></br>
                                                    <span className='bold tab15'>else</span><br></br>
                                                    <span className='bold tab15'>{'{'}</span><br></br>
                                                    <span className='bold tab15'>box2.style.display="none";</span><br></br>
                                                    <span className='bold'>{'{'}</span> <br></br>
                                                    <span className='bold'>{'});'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'< script type="text/javascript" >'}</span> <br></br>
                                                    <span className='bold tab5'>document.getElementById("btn3")</span> <br></br>
                                                    <span className='bold tab10'>.addEventListener("click",function()</span> <br></br>
                                                    <span className='bold'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>var</span> <br></br>
                                                    <span className='bold tab10'>box2=document.getElementById("red");</span> <br></br>
                                                    <br></br>
                                                    <span className='bold tab10'>if(box3.style.display=="none")</span> <br></br>
                                                    <span className='bold tab10'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>box3.style.display="block";</span> <br></br>
                                                    <span className='bold tab15'>{'{'}</span><br></br>
                                                    <span className='bold tab15'>else</span><br></br>
                                                    <span className='bold tab15'>{'{'}</span><br></br>
                                                    <span className='bold tab15'>box3.style.display="none";</span>
                                                    <span className='bold'>{'{'}</span> <br></br>
                                                    <span className='bold'>{'});'}</span> <br></br>
                                                    <br></br>
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
    )
}

