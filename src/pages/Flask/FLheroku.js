import React from 'react'
import { Card, Accordion } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './flask.css'

export const FLheroku = () => {
    return (
        <div className='flheroku'>

            <Card>
                <Card.Header><h1><SiIcons.SiFlask/> Flask Hero<SiIcons.SiHeroku />u Setup </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Accordion>

                                {/* Initial Setup */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Flask app to Heroku
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>in directory of your app code,</span> <br></br>
                                                <br></br>
                                                <span className='bold'>pip install gunicorn</span> <br></br>
                                                <br></br>
                                                <span>Make sure you're using pip</span> <br></br>
                                                <span>from your virtual environment</span> <br></br>
                                                <hr></hr>
                                                <span>Create a requirement.txt file in</span> <br></br>
                                                <span>the main app directory where the</span> <br></br>
                                                <span>main Python app file is located</span> <br></br>
                                                <span>You can create that file by running</span> <br></br>
                                                <br></br>
                                                <span className='bold'>pip freeze {'>'} requirements.txt</span> <br></br>
                                                <br></br>
                                                <span>in (cmdline)</span> <br></br>
                                                <span className='texty4'>Make sure you're using pip from your virtual environment</span> <br></br>
                                                <br></br>
                                                <span>The <span className='bold'>requirement.txt</span> file should now contain a list of Python packages</span> <br></br>
                                                <span className='tab5'>contain a list of Python packages</span> <br></br>
                                                <hr></hr>
                                                <span>Create a file named <span className='bold'>Procfile</span> in the main app directory</span> <br></br>
                                                <span className='texty4'>The file should not contain any extension</span> <br></br>
                                                <hr></hr>
                                                <span>Then type in this line inside:</span><br></br>
                                                <br></br>
                                                <span>Where<span className='bold'> script1</span> should be replaced with the name of your Python script</span> <br></br>
                                                <span className='tab5'>and "app" with the name of the variable holding your Flask app</span> <br></br>
                                                <hr></hr>
                                                <span>Create a <span className='bold'>runtime.txt</span> file in the main app directory and type</span> <br></br>
                                                <span className='tab5'>"python-3.5.1" (or your version if later) inside</span> <br></br>
                                                <hr></hr>
				                                <span>in (cmdline) cd back into directory of your app code</span> <br></br>
                                                <hr></hr>
                                                <span>in the (cmdline) type:</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>heroku login</span> <br></br> 
                                                <br></br>
                                                <span className='texty4'>you will be brought to a login page just accept</span> <br></br>
                                                <hr></hr>
                                                <span>Create new Heroku app with</span><br></br>
                                                <span className='bold tab5'>heroku create myawesomeappname</span><br></br>
                                                <hr></hr>
                                                <span>Initialize a local git repository with <span className='bold'>git init</span></span><br></br>
                                                <hr></hr>
                                                <span>Add your local application files to git with <span className='bold'>git add .</span></span><br></br>
                                                <hr></hr>
                                                <span>Tell git your email address</span><br></br>
                                                <br></br>
                                                <span className='bold tab5'>git config --global user.email</span><br></br>
                                                <span className='bold tab10'>"myemail@email.com"</span><br></br>
                                                <br></br>
                                                <span className='texty4'>Make sure the email address is inside quotes</span> <br></br>
                                                <hr></hr>
                                                <span>Tell git your username</span> <br></br>
                                                <span>(pick whatever username)</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>config --global user.name</span><br></br>
                                                <span className='bold tab10'>"whateverusername"</span><br></br>
                                                <br></br>
                                                <span className='texty4'>Make sure "first commit" is inside quotes</span> <br></br>
                                                <hr></hr>
                                                <span>Commit the changes with</span><br></br>
                                                <br></br>
                                                <span className='bold tab5'>git commit -m "first commit"</span><br></br>
                                                <br></br>
                                                <span className='texty4'>The username should be in quotes</span> <br></br>
                                                <hr></hr>
                                                <span>Before pushing the changes to Heroku</span><br></br>
                                                <span className='texty4 tab5'>tell heroku the name of the app you want to use with heroku</span> <br></br>
                                                <br></br>
                                                <span className='bold'>git:remote --app myawesomeappname</span><br></br>
                                                <hr></hr>
                                                <span>Push the changes to Heroku with</span><br></br>
                                                <span className='bold'>git push heroku master</span><br></br>
                                                <hr></hr>
                                                <span>That should do it!</span> <br></br> 
                                                <span className='tab5'>Go ahead and open your app with <span className='bold'>heroku open</span> </span>
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
