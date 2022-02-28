import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJauthenticate = () => {
    return (
        <div className='djauthenticate'>

            <Card>

                <Card.Header><h1 className='black'><SiIcons.SiDjango />ango Authenticate <SiIcons.SiPython /></h1></Card.Header>

                    <Card.Body>

                        <Card.Text className='texty'>

                            <span className='bold'>from django.shortcuts import render, redirect</span><br></br>
                            
                            <span className='bold'>from django.contrib.auth import authenticate, login, logout</span><br></br>
                            <br></br>
                            <span className='bold'>def login_user(request):</span><br></br>
                            
                            <span className='bold tab5'>if request.method == "POST":</span><br></br>
                            
                            <span className='bold tab5'>username = request.POST['username']</span><br></br>
                            
                            <span className='bold tab5'>password = request.POST['password']</span><br></br>
                            
                            <span className='bold tab5'>user = authenticate(request,</span><br></br>
                            
                            <span className='bold tab10'>username=username, password=password)</span><br></br>
                            
                            <span className='bold tab5'>if user is not None:</span><br></br>
                            
                            <span className='bold tab10'>login(request, user)</span><br></br>
                            
                            <span className='bold tab10'>messages.success(request, ('You are Logged in as'))</span><br></br>
                            
                            <span className='bold tab10'>return redirect('main')</span><br></br>
                        
                            <span className='bold tab5'>else:</span><br></br>
                           
                            <span className='bold tab10'>messages.success(request,</span><br></br>
                            
                            <span className='bold tab10'>('Error Logging In - Please Try Again...'))</span><br></br>
                            
                            <span className='bold tab10'>return redirect('login_user')</span><br></br>
                            
                            <span className='bold tab5'>else:</span><br></br>
                            
                            <span className='bold tab10'>return render(request, "login/login.html", {'{}'})</span><br></br>
                            <br></br>



                            <Accordion>
                                    <Card>
                                    
                                            <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                                #Commentary
                                            </Accordion.Toggle>
                                        
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body className='texty'>
                                                            <span className='blue'>#Create the function called 'login_user'</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#POST is the form method (or if somebody fills out the form)</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#posting username to the username field from the</span><br></br>
                                                            <span className='blue tab5'>'username' input field</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#posting password to the password field from the</span><br></br>
                                                            <span className='blue tab5'>'password' input field</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#create 'user' variable, pass thru 'request' variable, and </span><br></br>
                                                            <span className='blue tab5'>'username' and 'password' variables</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#thru the 'authenticate' function.  The aforementioned </span><br></br>
                                                            <span className='blue tab5'>function just sets username and password to preset variables. </span><br></br>
                                                            <span className='blue tab5'>In this case, username and password.</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#If the user is real</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#'Login' function passes through request and the 'user' variable</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#Message to communicate success</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#Return a Redirect to the Page you want to go to</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#Else there is an error</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#Redirect back to login</span><br></br>
                                                            <hr></hr>
                                                            <span className='blue'>#'Redirect' and 'Render' must be imported</span><br></br>
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

