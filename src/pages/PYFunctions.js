import React from 'react'
import { Card } from 'react-bootstrap'
import './pages.css'
import * as SiIcons from 'react-icons/si';

export const PYFunctions = () => {
    return (
        <div className='pyfunctions'>
            <Card className='card'>
            <Card.Header className="center"><h1>Functions <SiIcons.SiPython /></h1>
            </Card.Header>
            <Card.Body>
                <Card.Text className="texty">
                    A function is a block of code which only runs when it is called.<br></br>

                    You can pass data, known as parameters, into a function.<br></br>

                    A function can return data as a result.
                </Card.Text>
                <Card.Text className="bold">
                <span>def my_function():</span><br></br>
                    <span className='tab5'>print("Hello from a function")</span>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>   
    )
}


