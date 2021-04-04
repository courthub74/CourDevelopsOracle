import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLslider = () => {
    return (
        <div className='htmlslider'>

            <Card>

            <Card.Header><h1>HTML Slider <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <p>BELOW makes a value slider:</p>
                            <span className='bold'> {'<form>'} </span> <br></br>
                            <span className='bold tab5'> {'<label for="volume"> Volume'} </span> <br></br>
                            <span className='bold tab5'> {'Control</label>'} </span> <br></br>
                            <span className='bold tab5'> {'<input id="volume" name="volume"'} </span> <br></br>
                            <span className='bold tab5'> {'type="range" min="0" max="100"'} </span> <br></br>
                            <span className='bold tab5'> {'step="1">'} </span> <br></br>
                            <span className='bold'> {'</form>'}</span> <br></br>
                            <br></br>
                            <br></br>

                            <span className='tab15'><label for="years"><label for="volume">Volume
                                        Control</label></label></span><br></br>

                            <span className='tab15'><input id="volume" name="volume"
                                type="range" min="0" max="100"
                                step="1"/> </span><br></br>
                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

