import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJheroku = () => {
    return (
        <div className='djheroku'>

            <Card>
                <Card.Header><h1><SiIcons.SiDjango />ango Build Deploy to Hero<SiIcons.SiHeroku />u </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Accordion>

                                {/* Login Heroku */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        FIRST in the <span className='bold'>cmdline</span>:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span className='bold'>heroku login</span> <br></br>
                                                <span className='tab5'>you will be brought to</span> <br></br>
                                                <span className='tab10'>login page just accept</span> <br></br>
                                                <hr></hr>
                                                <span>NOW create the app</span><br></br>
                                                <br></br>
                                                <span className='bold'>heroku create</span> <br></br>
                                                <span className='tab5'>you have the option to name</span> <br></br>
                                                <span className='tab10'>your app here (heroku create appname)</span> <br></br> 
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Secret Key Settings */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        NEXT in <span className='bold'>settings.py</span>:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className='texty'>
                                              
                                                <span>copy the</span>
                                                <span className='bold'> SECRET_KEY = '#*@---#$'</span> <br></br>
                                                <span className='notes tab5'>#ABOVE is an example</span> <br></br>
                                                <br></br>
                                                <span>go to your Heroku project</span> <br></br>
                                                <span>and click settings click </span> <br></br>
                                                <span>Reveal Config Vars</span> <br></br>
                                                <br></br>
                                                <span>paste key (i.e. '#*@---#$')</span> <br></br>
                                                <span>where it says:<span className='bold'> 'VALUE'</span></span> <br></br>
                                                <span>paste 'SECRET_KEY' where it says<span className='bold'> 'KEY'</span></span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Installations */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        THEN back to <span className='bold'>cmd</span> line:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className='texty'>
                                                <span className='bold'>pip install gunicorn</span> <br></br>
                                                <span className='bold'>pip install django-heroku</span> <br></br>
                                                <span className='bold'>pip install python-decouple</span> <br></br>
                                        
                                                <br></br>
                                                <span>NOTE: Do a</span><span className='bold'> pip freeze</span><br></br>
                                                <span>to check if its all there</span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>

                                {/* Imports */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        BACK to <span className='bold'>settings.py</span>:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='texty'>

                                                <p>underneath <span className='bold'>import os </span>type these:</p>
                                                
                                                <span className='bold'>import django_heroku</span> <br></br>
                                                <span className='bold'>from decouple import config</span> <br></br>
                                                <span className='bold'>import dj_database_url</span> <br></br>
                                                <hr></hr>
                                                <span>under everything type:</span><br></br>
                                                <br></br>
                                                <span className='bold'>django_heroku.settings(locals())</span>
                                                <hr></hr>
                                                <span className='notes'>#The Secret Key</span><br></br>
                                                <br></br>
                                                <span>type in:</span><br></br>
                                                <br></br>
                                                <span className='bold'>SECRET_KEY = config('SECRET_KEY')</span>
                                                <br></br>
                                                <span>in (cmdline)<span className='bold'> touch .env</span></span><br></br>
                                                <span>[creates an .env file]</span><br></br>
                                                <br></br>
                                                <span>cut and paste the original<span className='bold'> SECRET_KEY</span></span><br></br>
                                                <span className='tab5'>in the <span className='bold'>.env </span><span>file save and close</span></span><br></br>
                                                <br></br>
                                                <span>in (cmdline) type:</span><br></br>
                                                <span className='tab5 bold'> touch .gitignore</span><br></br>
                                                <span>[this creates a .gitignore file]</span><br></br>
                                                <br></br>
                                                <span>type</span><span className='bold'> .env </span><span>in .gitignore file save and close</span> <br></br>
                                                <hr></hr>
                                                <span className='notes'>#Middleware</span><br></br>
                                                <br></br>
                                                <span>under</span><span className='bold'> MIDDLEWARE:</span><br></br>
                                                <br></br>
                                                <span>underneath:</span><br></br>
                                                <span className='bold'>'django.middleware.security.SecurityMiddleware'</span><br></br>
                                                <br></br>
                                                <span>type:</span><br></br>
                                                <span className='bold'>'whitenoise.middleware.WhiteNoiseMiddleware'</span>
                                                <hr></hr>
                                                <span className='notes'>#Static Files</span><br></br>
                                                <br></br>
                                                <span>in <span className='bold'>settings.py </span><span>under:</span></span><br></br>
                                                <br></br>
                                                <span className='bold'>STATICFILES_DIRS = {'['}</span><br></br>
                                                <span className='bold tab5'>os.path.join(BASE_DIR, 'static')</span><br></br>
                                                <span className='bold'>{']'}</span><br></br>
                                                <br></br>
                                                <span>type:</span><br></br>
                                                <br></br>
                                                <span className='bold'>STATICFILES_STORAGE = 'whitenoise.storage. CompressedManifestStaticFilesStorage'</span>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Procfile */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                        BACK to <span className='bold'>cmdline</span>:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body className='texty'>

                                                <span className='notes'>#Procfile</span><br></br>
                                                <br></br>
                                                <span>in </span><span className='bold'>cmdline/cli</span><span> type:</span><br></br>
                                                <br></br>
                                                <span>touch</span><span className='bold'> Procfile</span><br></br>
                                                <br></br>
                                                <span>in</span><span className='bold'> Procfile,</span><span> type</span><br></br>
                                                <br></br>
                                                <span className='bold tab5'>web: gunicorn (name of directory)</span><br></br>
                                                <span className='bold tab5'>with wsgi file in it).wsgi</span><br></br>
                                                <br></br>
                                                <span>save and close Procfile</span><br></br>
                                                <hr></hr>
                                                <span className='notes'>#Requirements</span><br></br>
                                                <br></br>
                                                <span>in <span className='bold'>cmdlind/cli</span><span> type:</span></span><br></br>
                                                <br></br>
                                                <span className='bold'>pip freeze {'>'} requirements.txt</span><br></br>
                                                <span>[this creates the requirements.txt file]</span>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>

                                {/* Procfile */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="8">
                                        Collectstatic
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body className='texty'>

                                                <span>If you haven't already for CSS,</span><br></br>
                                                <span>JS and Images purposes,</span><br></br>
                                                <span>make sure you add a directory</span><br></br>
                                                <span>called static in the main project folder</span><br></br>
                                                
                                                <br></br>
                                                <span>If nothing is in it just place a blank</span><br></br>
                                                <span>file in the</span><span className='bold'> static </span><span>folder and call it</span><span className='bold'> __init__.py</span><br></br>
                                                <br></br>
                                                <span>This is for the purpose of the</span><span className='bold'>'CollectStatic' </span><span>when deploying</span><br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Push to Heroku */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="9">
                                        Push to Heroku
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body className='texty'>

                                                <span>in </span><span className='bold'>cmdline/cli</span><span> type:</span><br></br>
                                                <br></br>
                                                <span className='bold tab5'>git push heroku master</span><br></br>
                                                <br></br>
                                                <span>before you do this, make sure you commit to git</span>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* Heroku Migrates */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="10">
                                        Heroku Migrates
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body className='texty'>

                                                <span>in </span><span className='bold'>cmdline/cli</span><span> type:</span><br></br>
                                                <br></br>
                                                <span className='bold'>heroku run python</span><br></br>
                                                <span className='bold tab5'>manage.py makemigrations</span><br></br>
                                                <hr></hr>
                                                <span className='bold'>heroku run python manage.py migrate</span><br></br>
                                                <hr></hr>
                                                <span className='bold'>heroku run python</span><br></br>
                                                <span className='bold tab5'>manage.py createsuperuser</span><br></br>
                                                <br></br>
                                                <span className='notes'>set up name | email | password</span><br></br>
                                                <hr></hr>
                                                <span className='bold'>heroku run python manage.py collectstatic</span><br></br>
                                                
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

