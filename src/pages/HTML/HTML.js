import React from 'react'
import { Button, Card } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTML = () => {
    return (
        <div className='htmlbasic'>

            <Card>
                <Card.Header><h1>HTML <AiIcons.AiFillHtml5 /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Hypertext Markup Language is the standard markup. <br></br>
                        language for documents designed to be displayed in a <br></br>
                        web browser.
                        </Card.Text>
                        <Button variant='dark'><a href="https://html.com/html5/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjuststickers.in%2Fwp-content%2Fuploads%2F2014%2F05%2FHTML5-Mark-Shape-Cut.png&f=1&nofb=1" alt="html"></img></a></Button>
                    </Card.Body>
            </Card>
            
        </div>
    )
}

