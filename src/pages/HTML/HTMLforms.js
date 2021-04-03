import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLforms = () => {
    return (
        <div className='htmlforms'>

            <Card>

                <Card.Header><h1>HTML Forms <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <span className='bold'>{'<form action="/example.html"'}</span> <br></br>
                        <span className='bold tab5'>{'method="POST">'}</span> <br></br>
                        <span className='bold'>{'</form>'}</span> <br></br> 
                        <br></br>
                        <p>In the above example, we’ve created the skeleton for a (form) <br></br>
                        that will send information to example.html as a POST request: <br></br>
                        The action attribute determines where the information is sent <br></br>
                        The method attribute is assigned a HTTP verb that is included <br></br>

                        in the HTTP request</p>

                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

