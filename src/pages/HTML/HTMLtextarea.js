import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLtextarea = () => {
    return (
        <div className='htmltextarea'>

            <Card>

            <Card.Header><h1>HTML Text Area <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <p>BELOW makes a text area:</p>
                            <span className='bold'> {'<form>'} </span> <br></br>
                            <span className='bold tab5'> {'<label for="blog">New Blog Post: </label>'} </span> <br></br>
                            <span className='bold tab5'> {'<br>'} </span> <br></br>
                            <span className='bold tab5'> {'<textarea id="blog" name="blog"'} </span> <br></br>
                            <span className='bold tab5'> {'rows="5" cols="30">'} </span> <br></br>
                            <span className='bold tab5'> {'step="1">'} </span> <br></br>
                            <span className='bold'> {'</textarea>'}</span> <br></br>
                            <br></br>
                            <br></br>

                            <span className='tab15'><label for="blog">New Blog Post: </label></span><br></br>

                            <span className='tab15'><textarea id="blog" name="blog"
                                rows="5" cols="30"/> </span><br></br>
                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

