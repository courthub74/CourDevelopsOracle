import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import './github.css'

export const GHinitpush = () => {
    return (
        <div className='ghinitpush'>

            <Card>

                <Card.Header><h1>Initial push to <AiIcons.AiFillGithub/></h1></Card.Header>

                <Card.Body>

                    <Card.Text>

                        <Accordion>

                            {/* Initialize Git */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Initialize Git Repository
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='texty'>
                                            
                                            <span className='bold'>git config --global user.name</span> <br></br>
                                            <span className='bold tab5'>"Your Name"</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git config --global user.email</span> <br></br>
                                            <span className='bold tab5'>"you@youraddress.com"</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git config --global push.default</span> <br></br>
                                            <span className='bold tab5'>matching</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git config --global alias.co</span> <br></br>
                                            <span className='bold tab5'>checkoutgit init</span> <br></br>
                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>


                            {/* Add Files to Git */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Add Files to Git
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className='texty'>

                                            <span className='bold'>git add .</span>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>


                            {/* Commit Files to Git */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Commit Files to Git
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body className='texty'>

                                            <span className='bold'>git commit -am "message here"</span>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>


                            {/* Set up the GitHub Repository */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Set up the GitHub Repository
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body className='texty'>

                                            <span>Log into Github.com account</span>
                                            <span className='texty4'>Set one up if you haven't already</span>
                                            <hr></hr>
                                            <span>Go to Repositories</span>
                                            <hr></hr>
                                            <span>Click 'New'</span>
                                            <hr></hr>
                                            <span>Enter Repository Name</span>
                                            <hr></hr>
                                            <span>Enter Description</span>
                                            <hr></hr>
                                            <span>Choose 'Public' or 'Private'</span>
                                            <hr></hr>
                                            <span>Don't do Readme yet</span>
                                            <span className='texty4'>Save that for later</span>
                                            <hr></hr>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>


                            {/* NOW push it to GitHub */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    NOW push it to GitHub
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body className='texty'>

                                            <span>FIRST type:</span>
                                            <hr></hr>
                                            <span className='bold'>git remote add origin git@github.com:</span> <br></br>
                                            <span className='bold tab5'>courthub74/(repo name here)</span> <br></br>
                                            <span>this just adds the origin to push to</span>
                                            <hr></hr>
                                            <span className='bold'>git push -u origin master</span> <br></br>
                                            <span>this pushes the code/build to to repo location</span>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>


                            {/* If Original Add Origin is Rejected */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    If Original Add Origin is Rejected
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body className='texty'>

                                            <span className='bold'>git remote set-url origin https://github.com/</span> <br></br>
                                            <span className='bold tab5'>courthub74/(repo name here)</span> <br></br>
                                        
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

