import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import './react.css'

export const REbuttonmap = () => {
    return (
        <div className='reactbuttonmap'>

            <Card>

                <Card.Header><h1>Mapping a Button Group <FaIcons.FaReact/></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty'>

                        <Accordion>
                            <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                        The JavaScript
                                    </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className='texty'>
                                                    <span className='bold'>{'export const Sidebar = () => {'}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'return ('}</span> <br></br>
                                                    <br></br>
                                                    <span className='bold'>{'<Buttongroup className="functypes" size="sm">'}</span> <br></br>
                                                    <span className='bold tab5'>{'{FunctionTypes.map((item, index) => {'}</span> <br></br>
                                                    <span className='bold tab10'>return (</span> <br></br>
                                                    <span className='bold tab15'>{'<li key={index}>'}</span> <br></br>
                                                    <span className='bold tab20'>{'<Button className={item.cName} href={item.url}>'}</span> <br></br>
                                                    <span className='bold tab25'>{'{item.title}'}</span> <br></br>
                                                    <span className='bold tab20'>{'</Button>'}</span> <br></br>
                                                    <span className='bold tab15'>{'</li>'}</span> <br></br>
                                                    <span className='bold tab10'>)</span> <br></br>
                                                    <span className='bold tab5'>{'})}'}</span> <br></br>
                                                    <span className='bold'>{'</Buttongroup>'}</span> <br></br>
                                                </Card.Body>
                                            </Accordion.Collapse>
                            </Card>
                        </Accordion>






                        <Accordion>
                            <Card>
                            
                                    <Accordion.Toggle as={Card.Header} eventKey="1" className='texty2'>
                                        The Sidebar Data
                                    </Accordion.Toggle>
                                
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body className='texty'>
                                                    <span className='bold'>export const JSWithIDButtons = {'['}</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>title: 'W/ Parameters',</span> <br></br>
                                                    <span className='bold tab10'>url: '/javascript/functions/params',</span> <br></br>
                                                    <span className='bold tab10'>cName: 'jsidbuttons'</span> <br></br>
                                                    <span className='bold tab5'> {'},'}</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>title: 'BACK To JS Functions',</span> <br></br>
                                                    <span className='bold tab10'>url: '/javascript/functions/',</span> <br></br>
                                                    <span className='bold tab10'>cName: 'jsidbuttons'</span> <br></br>
                                                    <span className='bold tab5'> {'},'}</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>title: 'Arrow Notation',</span> <br></br>
                                                    <span className='bold tab10'>url: '/javascript/functions/arrow',</span> <br></br>
                                                    <span className='bold tab10'>cName: 'jsidbuttons'</span> <br></br>
                                                    <span className='bold tab5'> {'},'}</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>title: 'Arrow Notation / Multi-Line Block',</span> <br></br>
                                                    <span className='bold tab10'>url: '/javascript/functions/multiline',</span> <br></br>
                                                    <span className='bold tab10'>cName: 'jsidbuttons'</span> <br></br>
                                                    <span className='bold tab5'> {'},'}</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>title: 'W/ Function Declaration',</span> <br></br>
                                                    <span className='bold tab10'>url: '/javascript/functions/funcdeclaration',</span> <br></br>
                                                    <span className='bold tab10'>cName: 'jsidbuttons'</span> <br></br>
                                                    <span className='bold tab5'> {'},'}</span> <br></br>
                                                    <span className='bold tab5'>{'{'}</span> <br></br>
                                                    <span className='bold tab10'>title: 'W/ Identifier',</span> <br></br>
                                                    <span className='bold tab10'>url: '/javascript/functions/identifier',</span> <br></br>
                                                    <span className='bold tab10'>cName: 'jsidbuttons'</span> <br></br>
                                                    <span className='bold tab5'> {'},'}</span> <br></br>
                                                    <span className='bold'> {']'}</span> <br></br>
                                                </Card.Body>
                                            </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

