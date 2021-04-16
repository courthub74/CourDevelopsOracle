import React from 'react'
import { Button, Card } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './flask.css'

export const FLASK = () => {
    return (
        <div className='flflask'>

            <Card>
                <Card.Header><h1><SiIcons.SiFlask/> Flask <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Flask is a lightweight WSGI (Web Server Gateway Interface) <br></br>
                        web application framework. It is designed to make getting<br></br>
                        started quick and easy, with the ability to scale up to <br></br>
                        complex applications. <br></br>
                        </Card.Text>
                        <Button variant='light'><a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.zaxrosenberg.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fflask-logo-e1495587344995.png%3Fresize%3D560%252C420&f=1&nofb=1" alt="html"></img></a></Button>
                    </Card.Body>
            </Card>
            
        </div>
    )
}

