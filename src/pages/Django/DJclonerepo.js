import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJclonerepo = () => {
    return (
        <div className='djclonerepo'>

            <Card>
                <Card.Header><h1 className='black'><SiIcons.SiDjango /> Cloning GitHub Repo <SiIcons.SiPython /> </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>

                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Click Here for Steps:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>Create the Directory</span> <br></br>
                                                <span className='bold tab5'>mkdir (project)</span> <br></br>
                                                <hr></hr>
                                                <span>cd into (project)</span> <br></br>
                                                <hr></hr>
                                                <span>install virtual environment</span> <br></br>
                                                <span className='bold tab5'>pip install virtualenv</span> <br></br>
                                                <hr></hr>
                                                <span>create virtual environment</span> <br></br>
                                                <span className='bold tab5'>virtualenv venv</span> <br></br>
                                                <hr></hr>
                                                <span>turn on virtual environment</span> <br></br>
                                                <span className='bold tab5'>. venv/Scripts/activate</span> <br></br>
                                                <hr></hr>
                                                <span>Install Django</span> <br></br>
                                                <span className='bold tab5'>pip install django</span> <br></br>
                                                <hr></hr>
                                                <span>Clone project into</span> <br></br>
				                                <span>(project folder)</span> <br></br>
                                                <hr></hr>

                                                <span>install dependencies:</span> <br></br>
                                                <br></br>
                                                <span><li>gunicorn</li></span>
                                                <span className='bold tab5'>pip install gunicorn</span><br></br>
                                                <br></br>
                                                <span><li>django-heroku</li></span>
                                                <span className='bold tab5'>pip install django-heroku</span><br></br>
                                                <span className='notes tab5'>#if pushing to heroku</span> <br></br>
                                                <br></br>
                                                <span><li>python-decouple</li></span>
                                                <span className='bold tab5'>pip install python-decouple</span>

                                                <hr></hr>
                                                <span>copy the .env file</span> <br></br>
                                                <br></br>
                                                <span>from the local one on your computer</span> <br></br>
                                                <span>or you will have to get the secret key</span> <br></br>
                                                <span>from whoever owns the repository</span> <br></br>
                                                
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

