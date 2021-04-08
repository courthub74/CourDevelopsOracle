import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLauthentication = () => {
    return (
        <div className='htmlauthenticate'>

                <Card>

                <Card.Header><h1>HTML User Authentication <AiIcons.AiFillHtml5 /></h1></Card.Header>

                    <Card.Body>

                        <Card.Text className='texty2'>

                            <p>BELOW makes a user authentication form:</p>
                                <span className='bold'>{'<form>'} </span> <br></br>
                                <span className='bold tab5'>{'<h1>Login Please:</h1>'}</span> <br></br>
                                <span className='bold tab10'>{'<label for="username">Username:'} </span><br></br>
                                <span className='bold tab10'>{'<input type="text"'} </span> <br></br>
                                <span className='bold tab15'>{'name="username" id="username">'} </span> <br></br>
                                <span className='bold tab5'>{'</br>'} </span> <br></br>
                                <span className='bold tab10'>{'<label for="user-pw">Password:'} </span> <br></br>
                                <span className='bold tab15'>{'<input type="password"'}</span> <br></br>
                                <span className='bold tab15'>{'name="user-pw" id="user-pw">'} </span> <br></br>
                                <span className='bold'>{'<form/>'} </span> <br></br>
                        </Card.Text>

                        <div className='texty'>
                            <form>
                                <h3>
                                    Login to start creating a burger!
                                </h3>
                                <label for="username">Username:</label>
                                <input type="text"
                                name="username" id="username"/>
                                <br></br>
                                <label for="user-pw">Password:</label>
                                <input type="password"
                                name="user-pw" id="user-pw"/>
                            </form>
                        </div>

                    </Card.Body>

                </Card>
            
        </div>
    )
}


