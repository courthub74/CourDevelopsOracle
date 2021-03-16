import React from 'react'
import './pages.css'
import * as SiIcons from 'react-icons/si'
import { Card } from 'react-bootstrap'

export const Counter = () => {
    return (
        <div className="counter">
            <Card>
                <Card.Header><h1>Counter <SiIcons.SiPython /></h1></Card.Header>

                <Card.Body>
                    <Card.Text className="texty">

                        <span>counter = 100</span><br></br>
                        <span>while counter {'>'}= 0:</span><br></br>
                        <span className='tab5'>print(counter)</span><br></br>
                        <br></br>
                        <span className='bold'># If I run this it will go on forever as there is nothing</span><br></br>
                        <span className='tab5 bold'>to increment down to zero. Counter will stay at 100 S0:</span><br></br>
                        <br></br>
                        <span className='tab5'>counter = counter - 1</span><br></br>
                        <br></br>
                        <span className='bold'># NOW it will add one everytime</span><br></br>
                        <span className='tab5 bold'>till it reaches 49 and then stop</span><br></br>
                        <br></br>
                        <span className='bold'># BOOM</span><br></br>
                        <br></br>
                        <span>counter = 100</span><br></br>
                        <span>while counter {'>'}= 0:</span><br></br>
                        <span className='tab5'>print(counter) while counter == 0:</span><br></br>
                        <span className='tab5'>print("Boom") counter = counter - 1</span><br></br>
                        <br></br>
                        <span className='bold'># If this wasn't here it would be 100 forever</span><br></br>
                        <span></span>
                        
                    </Card.Text>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                
                
            </Card>
        </div>
    )
}


