import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const ControlFlow = () => {
    return (
        <div className="controlflow">
            <Card>
                <Card.Header><h1>Control-Flow <SiIcons.SiPython /></h1></Card.Header>

                <Card.Body>
                    <Card.Text className="texty">
                        <span>w/ 'if' Statements</span> <br></br>
                        <br></br>
                        <span className='bold'>def dave_check(user_name):</span> <br></br>
                        <span className='tab5 bold'>if user_name == "Dave":</span> <br></br>
                        <span className='tab10 bold'>return "Get off my computer Dave!"</span> <br></br>
                        <span className='tab5 bold'>else:</span> <br></br>
                        <span className='tab10 bold'>if user_name == "angela_catlady_87":</span> <br></br>
                        <span className='tab5 bold'>return "I know it is you Dave! Go away!"</span> <br></br>
                        <br></br>
                        <span className='notes'># BELOW Enter a user name,</span> <br></br>
                        <span className='notes'>make sure to make it a string</span> <br></br>
                        <br></br>
                        <span className='bold'>user_name = "angela_catlady_87"</span> <br></br>
                        <span className='bold'>print(dave_check(user_name))</span> <br></br>
                        <br></br>
                        <br></br>
                        <span>Relational Operators II</span> <br></br>
                        <br></br>
                        <span className='notes'># Write a function called 'greater_than' that takes two integer inputs,</span> <br></br>
                        <span className='notes'>x and y and returns the value that is greater. If x and y are equal, return the string</span> <br></br>
                        <br></br>
                        <span className='bold'>def greater_than(x, y):</span> <br></br>
                        <span className='tab5 bold'>if x {'>'} y:</span> <br></br>
                        <span className='tab10 bold'>return x</span> <br></br>
                        <span className='tab5 bold'>if y {'>'} x:</span> <br></br>
                        <span className='tab10 bold'>return y</span> <br></br>
                        <span className='tab5 bold'>if x == y:</span> <br></br>
                        <span className='tab10 bold'>return "These numbers are the same"</span> <br></br>
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}


