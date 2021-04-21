import React from 'react'
import { Card, Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import './react.css'

export const REACT = () => {
    return (
        <div className='reacthome'>

            <Card>

                <Card.Header><h1>React.JS <FaIcons.FaReact/></h1></Card.Header>

                    <Card.Body>
                        <Card.Text>
                            React (also known as React.js or ReactJS) is an open-source <br></br>
                            JavaScript library for building user interfaces. It is maintained <br></br>
                            by Facebook and a community of individual developers and  <br></br>
                            companies 
                        </Card.Text>
                        <Button variant='dark'><a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1" alt="React"></img></a></Button>
                    </Card.Body>

            </Card>
            
        </div>
    )
}

