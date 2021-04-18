import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as DiIcons from 'react-icons/di'
import './git.css'

export const GITinit = () => {
    return (
        <div className='gitinit'>

            <Card>
                <Card.Header><h1>Initialize Git <DiIcons.DiGit/></h1></Card.Header>
                <Card.Body>
                    <Card.Text>


                        {/* Initialize Git */}
                        <Accordion>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                    Initialize Git Repository
                                </Accordion.Toggle>

                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='texty'>
                                            <span className='bold'>git config --global</span> <br></br>
                                            <span className='bold tab5'>user.name "Your Name"</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git config --global</span> <br></br>
                                            <span className='bold tab5'>user.email "you@youraddress.com"</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git config --global</span> <br></br>
                                            <span className='bold tab5'>push.default matching</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git config --global</span> <br></br>
                                            <span className='bold tab5'>alias.co checkoutgit init</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git init</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git add .</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git commit -m "message here"</span> <br></br>
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>
                        </Accordion>


                        {/* Basic Git Commands */}
                        <Accordion>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                    Basic Git Commands
                                </Accordion.Toggle>

                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='texty'>
                                            <span className='bold'><li>git init</li></span> <br></br>
                                            <span className='bold'><li>git add .</li></span> <br></br>
                                            <span className='bold'><li>git commit -m "message here"</li></span> <br></br>
                                            <span className='bold'><li>git status</li></span> <br></br>
                                            <span className='bold'><li>git log('q' to exit)</li></span> <br></br>
                                            <span className='bold'><li>git checkout(license plate-</li></span>
                                            <span className='bold tab5'> unique commit id)</span> <br></br>
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>
                        </Accordion>


                        {/* Push from Git to GitHub */}
                        <Accordion>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                    Push from Git to GitHub
                                </Accordion.Toggle>

                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='texty'>
                                            <span className='bold'>git remote add origin</span> <br></br>
                                            <span className='bold tab5'>git@github.com:</span> <br></br>
                                            <span className='bold tab10'>courthub74/(repo name here)</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git push -u origin master</span> <br></br>
                                            <hr></hr>
                                            <span>If Original Add Origin is</span> <br></br>
                                            <span>Rejected try below:</span> <br></br>
                                            <br></br>
                                            <span className='bold'>git remote set-url origin</span> <br></br>
                                            <span className='bold tab5'>https://github.com/courthub74/</span> <br></br>
                                            <span className='bold tab10'>(repo name here)</span> <br></br>
                                        </Card.Body>
                                    </Accordion.Collapse>
                            </Card>
                        </Accordion>


                        {/* Existing Push */}
                        <Accordion>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                    Existing Push
                                </Accordion.Toggle>

                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='texty'>
                                            <span className='bold'>git status</span> <br></br>
                                            <span className='bold'>git add .</span> <br></br>
                                            <span className='bold'>git commit -m "Commit Message"</span> <br></br>
                                            <span className='bold'>git push origin master</span> <br></br>
                                            <hr></hr>
                                            <span>NOTE: if changes are made in</span> <br></br>
                                            <span>your GitHub i.e. ReadMe commits,</span> <br></br>
                                            <span>then perform below:</span> <br></br>
                                            
                                            <br></br>
                                            <span className='bold'>git pull origin master</span> <br></br>
                                            <br></br>
                                            <span>THEN perform:</span> <br></br>
                                            <br></br>
                                            <span className='bold tab5'>'git push origin master' again</span> <br></br>
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

