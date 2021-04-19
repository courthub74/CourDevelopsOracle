import React from 'react'
import { Card } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import './api.css'

export const API = () => {
    return (
        <div className='apihome'>

            <Card>

                <Card.Header><h1>API <AiIcons.AiFillApi/></h1></Card.Header>

                    <Card.Body>

                        <Card.Text>

                            An application programming interface (API) is a computing interface <br></br>
                            which defines interactions between multiple software intermediaries. <br></br>
                            It defines the kinds of calls or requests that can be made, how to <br></br>
                            make them, the data formats that should be used, the conventions to <br></br>
                            follow, etc. It can also provide extension mechanisms so that users <br></br>
                            can extend existing functionality in various ways and to varying <br></br>
                            degrees. An API can be entirely custom, specific to a component, <br></br>
                            or it can be designed based on an industry standard to ensure <br></br>
                            interoperability. <br></br>

                            <br></br>

                            Today, with the rise of REST and SOAP over HTTP, the term is often <br></br>
                            assumed to refer to APIs of such services when given no other context. <br></br>

                            <br></br>s

                            Sometimes the term API is, by extension, misused to refer to the subset  <br></br>
                            of software entities (code, subcomponents, modules, etc.) that serve to  <br></br>
                            actually implement the API of some encompassing component or system. <br></br>

                        </Card.Text>

                </Card.Body>

            </Card>

            
        </div>
    )
}

