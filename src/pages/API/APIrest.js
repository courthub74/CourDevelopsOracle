import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import './api.css'

export const APIrest = () => {
    return (
        <div className='apirest'>

            <Card>

                <Card.Header><h1>RESTful API <AiIcons.AiFillApi/></h1></Card.Header>

                    <Card.Body>

                        <Card.Text className='texty2'>

                            Representational State Transfer (REST): <br></br>
                            <br></br>
                            is a software architectural style that defines a set of constraints<br></br>
                            to be used for creating web services REST-compliant systems,<br></br>
                            often called RESTful systems, are characterized by how they<br></br>
                            are stateless and separate the concerns of client and server.<br></br>
                            Systems that follow the REST paradigm are stateless, meaning <br></br>
                            that the server does not need to know anything about what state <br></br>
                            the client is in and vice versa. Because REST systems interact <br></br>
                            through standard operations on resources, they do not rely on <br></br>
                            the implementation of interfaces. <br></br>

                            <br></br>

                            If a system violates any of these contraints, it cannot be considered RESTful:<br></br>

                            <br></br>

                            <li>Client-Server architecture</li><br></br>
                            <li>Statelessnesss</li><br></br>
                            <li>Cacheability</li><br></br>
                            <li>Layered System</li><br></br>
                            <li>Code on Demand (Optional)</li><br></br>
                            <li>Uniform Interface</li><br></br>
                            

                        </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

