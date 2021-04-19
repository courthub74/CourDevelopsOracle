import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import './api.css'

export const APIsoap = () => {
    return (
        <div className='apisoap'>

                <Card>

                <Card.Header><h1>SOAP API <AiIcons.AiFillApi/></h1></Card.Header>

                    <Card.Body>

                        <Card.Text className='texty2'>

                            Simple Object Access Protocol (SOAP):  <br></br>
                            <br></br>
                            These built-in standards do carry a bit more overhead,<br></br>
                            but can be a deciding factor for organizations that require more<br></br>
                            comprehensive features in the way of security, transactions, and<br></br>
                            ACID (Atomicity, Consistency, Isolation, Durability) compliance.<br></br>
                            <br></br>
                            Systems that follow the REST paradigm are stateless, meaning that the server<br></br>
                            does not need to know anything about what state the client is in and vice versa.<br></br>
                            Because REST systems interact through standard operations on resources,<br></br>
                            they do not rely on the implementation of interfaces. <br></br>

                            <br></br>

                            SOAP Advantages: <br></br>

                            <br></br>
                            <li>SOAP has tighter security</li><br></br>
                            <li>Successful/retry logic for reliable messaging functionality</li><br></br>
                            <li>SOAP has built-in ACID compliance</li><br></br>

                            <br></br>

                            Overall SOAP is a Protocol system. REST is an architectural style
                            

                        </Card.Text>

                </Card.Body>

                </Card>
            
        </div>
    )
}


