import React from 'react';
import { Button, Card } from 'react-bootstrap';
import * as DiIcons from 'react-icons/di';
import './css.css';

export const CSS = () => {
    return (
        <div className='css'>

            <Card>
                <Card.Header><h1>CSS <DiIcons.DiCss3 /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        CSS (Cascading Style Sheets) is designed to enable<br></br>
                        the separation of presentation and content, including<br></br>
                        layout, colors, and fonts.
                        </Card.Text>
                        <Button variant='secondary'><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Flogotypes%2F32%2Fbadge-css-3-512.png&f=1&nofb=1" alt="html"></img></a></Button>
                    </Card.Body>
            </Card>
            
        </div>
    )
}

