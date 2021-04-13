import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJheroku = () => {
    return (
        <div>

            <Card>
                <Card.Header><h1><SiIcons.SiDjango />ango Build Deploy to Heroku<SiIcons.SiHeroku /> </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Accordion>

                                {/* Login Heroku */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        in the CMDLINE:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span></span> <br></br>
                                                <br></br>
                                                <span className='bold'>heroku login</span> <br></br>
                                                <span className='tab5'>you will be brought to</span> <br></br>
                                                <span className='tab10'>login page just accept</span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* create the app */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Create the app
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className='texty'>
                                                <span className='bold'>heroku create</span> <br></br>
                                                <span className='tab5'>you have the option to name</span> <br></br>
                                                <span className='tab10'>your app here (heroku create appname)</span> <br></br>         
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Secret Key Settings */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Secret Key Settings
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className='texty'>
                                                <p>in SETTINGS.PY:</p>
                                                
                                                <span>copy the</span>
                                                <span className='bold'>SECRET_KEY = '#*@---#$'</span> <br></br>
                                                <span className='notes tab5'>#ABOVE is an example</span> <br></br>
                                                <br></br>
                                                <span>go to your Heroku project</span> <br></br>
                                                <span>and click settings click </span> <br></br>
                                                <span>Reveal Config Vars</span> <br></br>
                                                <br></br>
                                                <span>paste key(i.e. '#*@---#$')</span> <br></br>
                                                <span>where it says:<span className='bold'>'VALUE'</span></span> <br></br>
                                                <span>paste 'SECRET_KEY' where it says<span className='bold'>'KEY'</span></span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Installations */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        Installations
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className='texty'>
                                                
                                                <p>Go back to terminal and install:</p>
                                                
                                                <span className='bold'>pip install gunicorn</span> <br></br>
                                                <span className='bold'>pip install django-heroku</span> <br></br>
                                                <span className='bold'>pip install python-decouple</span> <br></br>
                                                <span className='bold'>return render(request, 'home.html',</span> <br></br>
                                                <span>NOTE: Do a</span><span className='bold'>pip freeze</span><br></br>
                                                <span>to check if its all there</span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>

                                {/* Imports */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Imports
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='texty'>

                                                <p>in SETTINGS.PY underneath <span className='bold'>import os</span>type these:</p>
                                                
                                                <span className='bold'>import django_heroku</span> <br></br>
                                                <span className='bold'>from decouple import config</span> <br></br>
                                                <span className='bold'>import dj_database_url</span> <br></br>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Local Settings */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Local Settings
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='texty'>

                                                <p>at bottom of <span className='bold'>settings.py</span>under everything type:</p>
                                                
                                                <span className='bold'>django_heroku.settings(locals())</span> <br></br>
                                            
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Secret Key */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        For Secret Key in Settings
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='texty'>

                                                <p>in <span className='bold'>settings.py</span></p>

                                                <span>type in:</span><br></br>
                                                <br></br>
                                                <span className='bold'>SECRET_KEY = config('SECRET_KEY')</span>
                                                <br></br>
                                                <span>in (cmdline)<span className='bold'>touch .env</span></span><br></br>
                                                <span>[creates an .env file]</span>
                                                <br></br>
                                                <span>cut and paste the original<span className='bold'>SECRET_KEY</span></span><br></br>
                                                <span className='tab5'><span className='bold'>.env</span><span>file save and close</span></span>
                                                <br></br>
                                                <span>in (cmdline)<span className='bold'>touch .gitignore</span></span><br></br>
                                                <span>[this creates a .gitignore file]</span><br></br>
                                                <br></br>
                                                <span>type</span><span className='bold'>.env</span><span>in there save and close</span> <br></br>
                                            
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Middleware */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Middleware
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='texty'>

                                                <p>in <span className='bold'>settings.py</span></p>

                                                <span>type in:</span><br></br>
                                                <br></br>
                                                <span className='bold'>SECRET_KEY = config('SECRET_KEY')</span>
                                                <br></br>
                                                <span>in (cmdline)<span className='bold'>touch .env</span></span><br></br>
                                                
                                            
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

