import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJorm = () => {
    return (
        <div className='djorm'>

<Card>
                <Card.Header><h1><SiIcons.SiDjango />ango ORM <SiIcons.SiPython /> </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>

                            <p>
                                (Object Relational Mapping) Transporting Info from models.py | views.py
                            </p>

                            <Accordion>

                                {/* IN VIEWS.PY */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        in VIEWS.PY 
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>Set up the 'Home' page</span> <br></br>
                                                <br></br>
                                                <span className='bold'>def home(request):</span> <br></br>
                                                <span className='bold tab5'>my_name = "Court"</span> <br></br>
                                                <span className='bold tab5'>return render(request, 'home.html',</span> <br></br>
                                                <span className='bold tab10'>{'{"name": my_name})'}</span> <br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* IN HOME.HTML */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        in HOME.HTML
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className='texty'>
                                                <span>Transport the variable 'my_name' by calling the 'name' dictionary</span><br></br>
                                                <br></br>
                                                <span className='bold'>{'{% extends "home.html" %}'}</span> <br></br>
                                                <span className='bold'>{'{% block content %}'}</span> <br></br>
                                                <span className='bold tab5'>My name is: {'{{ name }}'}</span> <br></br>
                                                <span className='bold'>{'{ % block content % }'}</span> <br></br>
                                                <hr></hr>
                                                <span>The output on home.html will read:</span> <br></br>
                                                <span>"My name is:<span className='bold'>Court"</span></span> <br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Change the Output */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Change the output
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className='texty'>
                                                <p>in the dictionary you can change anything by just changing the value</p>
                                                <hr></hr>
                                                <span className='bold'>def home(request):</span> <br></br>
                                                <span className='tab5'>my_name = "Court"</span> <br></br>
                                                <span className='tab5'>number = 4 + 9</span> <br></br>
                                                <span className='tab5'>return render(request, 'home.html',</span> <br></br>
                                                <span className='tab5'>{'{"name": number})'}</span> <br></br>
                                                <p>We've changed the value from my_name to number</p>
                                                <hr></hr>
                                                <p>The output from:</p>
                                                <span className='bold'>{'{% extends "home.html" %}'}</span> <br></br>
                                                <span className='tab5'>{'{% block content %}'}</span> <br></br>
                                                <span className='tab5'>My name is: {'{{ name }}'}</span> <br></br>
                                                <span className='tab5'>{'{% endblock %}'}</span> <br></br>
                                                <hr></hr>
                                                <span>will now read what's in the number variable:</span><br></br>
                                                <span className='tab10'>4 + 9 which equals <span className='bold'>13</span></span><br></br>
                                                <span>So the home.html screen will say:</span><br></br>
                                                <span className='tab10'>My name is: <span className='bold'>13</span></span>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* More than one dictionary */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        More than one dictionary 
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className='texty'>
                                                
                                                <p>BELOW we have firstname and lastname</p>
                                                
                                                <span className='bold'>def home(request):</span> <br></br>
                                                <span className='bold tab5'>firstname = "Court"</span> <br></br>
                                                <span className='bold tab5'>lastname = "Jacobs"</span> <br></br>
                                                <span className='bold tab5'>return render(request, 'home.html',</span> <br></br>
                                                <span className='bold tab5'>{'{"firstname": firstname,'}</span> <br></br>
                                                <span className='bold tab10'>{'"lastname": lastname}'}</span> <br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>

                                {/* More than one dictionary in HOME.HTML */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        in home.html (more than one dictionary)
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='texty'>

                                                <p>You can have:</p>
                                                
                                                <span className='bold'>{'{% extends "home.html" %}'}</span> <br></br>
                                                <span className='bold tab5'>{'{% block content %}'}</span> <br></br>
                                                <span className='bold tab5'>My first name is: {'{{ firstname }}'}</span> <br></br>
                                                <span className='bold tab5'>My last name is: {'{{ lastname }}'}</span> <br></br>
                                                <span className='bold tab5'>{'{% endblock %}'}</span> <br></br>
                                                <hr></hr>
                                                <span>The output on home.html will read:</span><br></br>
                                                <br></br>
                                                <span>My first name is:<span className='bold'> Court</span></span><br></br>
                                                <span>My last name is:<span className='bold'> Jacobs</span></span>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                
                            </Accordion>

                        </Card.Text>
                    </Card.Body>
            </Card>
            
        </div>
    )
}

