import React from 'react'
import { Button, Card } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';

export const Javascript = () => {
    return (
        <div className='javascript'>
            <Card>
                <Card.Header><h1 className='black'>JavaScript <SiIcons.SiJavascript/></h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        JavaScript is high-level, often just-in-time compiled, and multi-paradigm. <br></br>
                        It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, <br></br>
                        and first-class functions.
                        </Card.Text>
                        <Button variant='dark'><a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fjavascript-png%2Fjavascript-vector-logo-yellow-png-transparent-javascript-vector-12.png&f=1&nofb=1" alt="javascript"></img></a></Button>
                    </Card.Body>
            </Card>
        </div>
    )
}


