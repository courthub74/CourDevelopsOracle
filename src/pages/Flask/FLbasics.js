import React from 'react'
import { Card, Accordion } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './flask.css'

export const FLbasics = () => {
    return (
        <div className='flbasics'>

            <Card>
                <Card.Header><h1><SiIcons.SiFlask/> Flask Basic Setup </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Accordion>

                                {/* Initial Setup */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Initial Setup and Installation
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>mkdir (project)</span> <br></br>
                                                <hr></hr>
                                                <span>in (project) install flask</span> <br></br>
                                                <span className='bold'>pip install flask</span> <br></br>
                                                <hr></hr>
                                                <span>open text editor and</span> <br></br>
                                                <span>attach the folder (project)</span> <br></br>
                                                <hr></hr>
                                                <span>create new file within (project)</span> <br></br>
                                                <span>called (new file)[save as]</span> <br></br>
                                                <hr></hr>
                                                <span>enter below in (new file):</span><br></br>
                                                <br></br>
                                                <span className='bold'>from flask import Flask</span> <br></br>
                                                <br></br>
                                                <span className='bold'>app = Flask(__main__)</span> <br></br>
                                                <span className='bold'>if __name__ == "__main__":</span> <br></br> 
                                                <span className='bold tab5'>app.run(debug=True)</span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* ADD pages */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        NEXT you add pages like so:
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className='texty2'>
                        
                                                <span className='bold'>from flask import Flask</span> <br></br>
                                                <br></br>
                                                <span className='bold'>app = Flask(__main__)</span> <br></br>
                                                <br></br>
                                                <span className='bold blue'>@app.route('/')</span> <br></br>
                                                <span className='bold blue'>def home():</span> <br></br>
                                                <span className='bold blue tab5'>return render_template("home.html")</span> <br></br>
                                                <br></br>
                                                <span>THIS sets up the 'Home' page</span> <br></br>
                                                <hr></hr>
                                                <span className='bold red'>@app.route('/about')</span> <br></br>
                                                <span className='bold red'>def home():</span> <br></br>
                                                <span className='bold red tab5'>return render_template("about.html")</span> <br></br>
                                                <br></br>
                                                <span>THIS sets up the 'About' page</span> <br></br>
                                                <hr></hr>
                                                <span className='bold green texty2'>@app.route('/pricing')</span> <br></br>
                                                <span className='bold green texty2'>def pricing():</span> <br></br>
                                                <span className='bold green texty2 tab5'>return render_template("pricing.html")</span> <br></br>
                                                <br></br>
                                                <span>THIS sets up the 'Pricing' page</span> <br></br>
                                                <br></br>
                                                <span className='bold'>if __name__ == "__main__":</span> <br></br>
                                                <span className='bold tab5'>app.run(debug=True)</span> <br></br>
                                                <hr></hr>
                                                <span>And so forth ....</span> <br></br>
                                                <hr></hr>
                                                <span>To Run the app:</span><br></br>
                                                <br></br>
                                                <span><li className='tab5'>from (cmdline) cd into (project)</li></span>
                                                <span><li className='tab5'>type: python (new file)</li></span>
                                                <hr></hr>
                                                <span>You can then create links to the different</span> <br></br>
                                                <span>pages inside the HTML</span> <br></br>
                                                
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

