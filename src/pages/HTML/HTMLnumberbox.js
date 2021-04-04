import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLnumberbox = () => {
    return (
        <div className='htmlnumberbox'>

            <Card>

            <Card.Header><h1>HTML Numberbox <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <p>BELOW makes a numberbox:</p>
                            <span className='bold'> {'<form>'} </span> <br></br>
                            <span className='bold tab5'> {'<label for="years"> Years of experience:'} </span> <br></br>
                            <span className='bold tab5'> {'</label>'} </span> <br></br>
                            <span className='bold tab5'> {'<input id="years" name="years"'} </span> <br></br>
                            <span className='bold tab5'> {'type="number" step="1">'} </span> <br></br>
                            <span className='bold'> {'</form>'}</span> <br></br>
                            <br></br>
                            <span className='tab15'><label for="years"> Years of experience:</label></span><br></br>
                            <span className='tab15'><input id="years" name="years" type="number" step="1"></input></span><br></br>
                            <span className='tab20 texty3'>* Hover over box and click the arrows</span>
                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

