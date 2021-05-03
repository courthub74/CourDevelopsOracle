import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si';
import './react.css'

export const REauthenticate = () => {
    return (
        <div className='reactauth'>

            <Card>
                <Card.Header><h1>React <FaIcons.FaReact/> / <SiIcons.SiDjango />ango Authentication</h1></Card.Header>

                <Card.Body>
                    <Card.Text>

                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                    First
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body className='texty2'>
                                        We need to install some packages<br></br>
                                        <br></br>
                                        <span className='bold'>pipenv install django</span><br></br>
                                        <span className='bold'>pipenv install djangorestframework</span><br></br>
                                        <span className='bold'>pipenv install djangorestframework-jwt</span><br></br>
                                        <span className='bold'>pipenv install django-cors-headers</span><br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className='texty2'>
                                    Next
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='1'>
                                    <Card.Body className='texty2'>
                                        Implement these changes in <span className='bold'>Settings.py</span><br></br>
                                        <span className='tab5'>changes are in <span className='red'>red</span></span><br></br>
                                        <br></br>
                                        <span>INSTALLED_APPS = {'['}</span> <br></br>
                                        <span># ...</span> <br></br>
                                        <span>'rest_framework',</span> <br></br>
                                        <span>'corsheaders',</span> <br></br>
                                        <span>{']'}</span> <br></br>
                                        <br></br>
                                        <span>MIDDLEWARE = {'['}</span> <br></br>
                                        <span># ...</span> <br></br>
                                        <span>'corsheaders.middleware.CorsMiddleware',</span> <br></br>
                                        <span></span> <br></br>
                                        <span></span> <br></br>
                                        <span></span> <br></br>
                                        <span></span> <br></br>
                                        <span></span> <br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2" className='texty2'>
                                    Three
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='2'>
                                    <Card.Body>
                                        Three
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3" className='texty2'>
                                    Four
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='3'>
                                    <Card.Body>
                                        Four
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4" className='texty2'>
                                    Five
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='4'>
                                    <Card.Body>
                                        Five
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

