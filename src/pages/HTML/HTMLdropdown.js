import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLdropdown = () => {
    return (
        <div className='htmldropdown'>

        <Card>

        <Card.Header><h1>HTML Dropdown <AiIcons.AiFillHtml5 /></h1></Card.Header>

            <Card.Body>

                <Card.Text className='texty2'>

                    <p>BELOW makes a dropdown menu:</p>
                        <span className='bold'>{'<form>'} </span> <br></br>
                        <span className='bold tab5'>{'<label for="lunch">'} </span> <br></br>
                        <span className='bold tab5'>{'Whats for lunch?'} </span> <br></br>
                        <span className='bold tab5'>{'</label>'} </span> <br></br>
                        <br></br>
                        <span className='bold tab5'>{'<select id="lunch" name="lunch">'} </span> <br></br>
                        <span className='bold tab10'>{'<option value="pizza">Pizza'} </span> <br></br>
                        <span className='bold tab10'>{'<option value="currychicken">'} </span> <br></br>
                        <span className='bold tab15'>Curry Chicken</span> <br></br>
                        <span className='bold tab10'>{'<option value="salad">Salad'} </span> <br></br>
                        <span className='bold tab10'>{'<option value="ramen">Ramen'} </span> <br></br>
                        <span className='bold tab10'>{'<option value="tacos">Tacos'} </span> <br></br>
                        <span className='bold tab5'>{'</select>'} </span> <br></br>
                        <span className='bold'>{'</select>'} </span> <br></br>
                </Card.Text>

            </Card.Body>

        </Card>
            
        </div>
    )
}
