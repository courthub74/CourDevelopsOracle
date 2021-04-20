import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import './react.css'

export const REconstruct = () => {
    return (
        <div className='reactconstr'>

            <Card>
                <Card.Header><h1>Constructor <FaIcons.FaReact/></h1></Card.Header>
                <Card.Body>
                    <Card.Text className='texty2'>

                            The Constructor initializes an objects state in a class. <br></br>
                            In a React component, it is called before the component <br></br>
                            is mounted.  You use 'super(props)' method before any <br></br>
                            other statement.  Without 'super(props)', 'this.props' <br></br>
                            will be undefined. 
                            
                        <Accordion>
                        <br></br>

                            {/* The Syntax */}
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey="0">
                                        The Syntax
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body className='texty'>
                                        <span className='bold'>Constructor(props){'{'}</span> <br></br>
                                        <span className='bold tab5'>super(props);</span> <br></br>
                                        <span className='bold'>{'}'}</span> <br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            {/* App.js */}
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey="1">
                                        App.js
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey='1'>
                                    <Card.Body className='texty'>
                                        <span className='bold'>import React, {'{ Component }'} from 'react'; </span> <br></br>
                                        <br></br>
                                        <span className='bold'>class App extends Component {'{'} </span> <br></br>
                                        <span className='bold tab5'>constructor(props){'{'}</span> <br></br>
                                        <span className='bold tab5'>super(props);</span> <br></br>
                                        <span className='bold tab5'>this.state = {'{'} </span> <br></br>
                                        <span className='bold tab10'>data: 'www.courdevelops.com'</span> <br></br>
                                        <span className='bold tab5'>{'}'}</span> <br></br>
                                        <span className='bold tab5'>this.handleEvent = this.handleEvent.bind(this);</span> <br></br>
                                        <span className='bold'>{'}'}</span> <br></br>
                                        <span className='bold'>handleEvent(){'{'} </span> <br></br>
                                        <span className='bold tab5'>console.log(this.props); </span> <br></br>
                                        <span className='bold'>{'}'}</span> <br></br>

                                        <span className='bold'>render() {'{'}</span><br></br>
                                        <span className='bold tab5'>return ( </span><br></br>
                                        <span className='bold tab5'>{'<div className="App">'} </span><br></br>
                                        <span className='bold tab5'>{'<h2>React Constructor Example</h2>'} </span><br></br>
                                        <span className='bold tab5'>{'<input type ="text" value={this.state.data} />'} </span><br></br>
                                        <span className='bold tab10'>{'<button onClick={this.handleEvent}>Please Click</button>'} </span><br></br>
                                        <span className='bold tab10'>{'</div>'} </span><br></br>
                                        <span className='bold tab10'>{');'} </span><br></br>
                                        <span className='bold tab5'>{'}'} </span><br></br>
                                        <span className='bold'>{'}'} </span><br></br>
                                        <span className='bold'>export default App;</span><br></br>
                                        
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>


                            {/* Main.js */}
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey="2">
                                        Main.js
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey='2'>
                                    <Card.Body className='texty'>
                                        <span className='bold'>import React from 'react'; </span> <br></br>
                                        <span className='bold'>import ReactDOM from 'react-dom'; </span> <br></br>
                                        <span className='bold'>import App from './App.js'; </span> <br></br>
                                        <br></br>
                                        <span className='bold'>{'ReactDOM.render(<App />, document.getElementById("app"));'} </span> <br></br>
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

