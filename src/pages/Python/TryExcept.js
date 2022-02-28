import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const TryExcept = () => {
    return (
        <div className='tryex'>
            <Card>
                <Card.Header><h1 className='black'>Try-Except <SiIcons.SiPython /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className="texty">
                        <span className="notes"># Try / Except</span> <br></br>
                        <br></br>
                        <span className='bold'>def divides(a,b):</span> <br></br>
                        <span className='tab5 bold'>try:</span> <br></br>
                        <span className='tab10 bold'>def divides(a,b):</span> <br></br>
                        <span className='tab10 bold'>print (result)</span> <br></br>
                        <span className='tab5 bold'>except ZeroDivisionError:</span> <br></br>
                        <span className='tab10 bold'>print ("Can't divide by zero!")</span> <br></br>
                        <br></br>
                        <span className="notes"># Another Try / Except</span> <br></br>
                        <br></br>
                        <span className='bold'>def raises_value_error():</span> <br></br>
                        <span className='tab5 bold'>try:</span> <br></br>
                        <span className='tab10 bold'>raise ValueError</span> <br></br>
                        <span className='tab5 bold'>except:</span> <br></br>
                        <span className='tab5 bold'>print ("You raised a ValueError!")</span> <br></br>
                        <br></br>
                        <span className='bold'>raises_value_error()</span> <br></br>
                    </Card.Text>

                </Card.Body>
            </Card>
            
        </div>
    )
}


