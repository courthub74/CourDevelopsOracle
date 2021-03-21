import React from 'react';
import {Button, Card} from 'react-bootstrap';

export const Python = () => {
    return (
        <div className='python'>
             
            <Card className='card'> 
                <Card.Header>Python Generale 🐍</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Python is an interpreted, high-level, 
                        general-purpose programming language. <br></br>
                        Created by Guido van Rossum and first 
                        released in 1991, Python's design philosophy <br></br> 
                        emphasizes code readability with its notable use of significant whitespace
                        </Card.Text>
                        <Button variant="dark"><a href="https://www.python.org/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dataquest.io%2Fwp-content%2Fuploads%2F2020%2F05%2Fpython_logo.png&f=1&nofb=1" alt="python"></img></a></Button>
                    </Card.Body>
            </Card>
        </div>
    )
}


