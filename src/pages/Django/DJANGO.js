import React from 'react'
import { Button, Card } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJANGO = () => {
    return (
        <div className='django'>

            <Card>
                <Card.Header><h1 className='black'><SiIcons.SiDjango />ango <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Django is a high-level Python Web framework <br></br>
                        that encourages rapid development and clean, <br></br>
                        pragmatic design.
                        </Card.Text>
                        <Button variant='warning'><a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjuststickers.in%2Fwp-content%2Fuploads%2F2016%2F03%2Fdjango-side-coaster.png&f=1&nofb=1" alt="html"></img></a></Button>
                    </Card.Body>
            </Card>
            
        </div>
    )
}

