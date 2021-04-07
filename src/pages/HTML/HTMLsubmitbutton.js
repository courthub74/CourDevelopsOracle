import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLsubmitbutton = () => {
    return (
        <div className='htmlsubmitbutton'>

            <Card>

            <Card.Header><h1>HTML Submit Button <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <p>BELOW makes a submit button:</p>
                            <span className='bold tab5'> {'<button type="button">Submit</button>'} </span> <br></br>
                            <br></br>
                            <span className='tab15'><button type="button">Submit</button></span>
                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

