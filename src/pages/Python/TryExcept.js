import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const TryExcept = () => {
    return (
        <div className='tryex'>
            <Card>
                <Card.Header><h1>Try-Except <SiIcons.SiPython /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className="texty">
                        <span className="notes bold"># Try / Except</span> <br></br>
                        <br></br>
                        <span>def divides(a,b):</span> <br></br>
                        <span className='tab5'>try:</span> <br></br>
                        <span className='tab10'>def divides(a,b):</span> <br></br>
                        <span className='tab10'>print (result)</span> <br></br>
                        <span className='tab5'>except ZeroDivisionError:</span> <br></br>
                        <span className='tab10'>print ("Can't divide by zero!")</span> <br></br>
                        <br></br>
                        <span className="notes bold"># Another Try / Except</span> <br></br>
                        <br></br>
                        <span>def raises_value_error():</span> <br></br>
                        <span className='tab5'>try:</span> <br></br>
                        <span className='tab10'>raise ValueError</span> <br></br>
                        <span className='tab5'>except:</span> <br></br>
                        <span className='tab5'>print ("You raised a ValueError!")</span> <br></br>
                        <br></br>
                        <span>raises_value_error()</span> <br></br>
                    </Card.Text>

                </Card.Body>
            </Card>
            
        </div>
    )
}


