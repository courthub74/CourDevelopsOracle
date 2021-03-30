import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const DisableFieldsCheckbox = () => {
    return (
        <div className='jsdisablefields'>

            <Card>

                <Card.Header><h1>Disable Fields by Checkbox <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>
                    <Card.Text className='texty2'>
                        <span className='bold'>'Onsite'</span><span> value is disabled when</span><span className='bold'>'Instudio'</span><span>is checked</span><br></br>
                        <span className='tab5'>You can plug in ANY two values for this sequence</span> <br></br>
                    </Card.Text>
                </Card.Body>

                    <div>
                        {/* <p style={{fontSize:'15px'}} className='notes bold'>Click for Code Below:</p> */}

                        <Accordion style={{fontSize:'15px'}}>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                        <span className='accordian'>Click Here for vanilla JS code:</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                    <Card.Body>
                                        <span className='bold'>{'<script type="text/javascript">'}</span> <br></br>
                                        <span className='bold'>$function() {'{'}</span><br></br>
                                        <span className='tab5 bold'>$("#checked").change(function() {'{'}</span><br></br>
                                        <span className='tab5 bold'>var set = this.checked;</span><br></br>
                                        <span className='tab5 bold'>if (set) {'{'}</span><br></br>
                                        <span className='tab10 bold'>$("#other").prop("disabled", false);</span> <br></br>
                                        <span className='tab10 bold'>$("#other2").prop("disabled", false);</span> <br></br>
                                        <span className='tab10 bold'>$("#other3").prop("disabled", false);</span> <br></br>
                                        <span className='tab10 bold'>$("#other4").prop("disabled", false);</span> <br></br>
                                        <span className='tab10 bold'>$("#other5").prop("disabled", false);</span> <br></br>
                                        <span className='tab5 bold'>{'}'}</span><br></br>
                                        <span className='tab5 bold'>else {'}'}</span><br></br>
                                        <span className='bold'>$("#other").prop("disabled", true);</span><br></br>
                                        <span className='tab5 bold'>{'}'}</span><br></br>
                                        <span className='bold'>{'});'}</span> <br></br>
                                        <span className='bold'>{'});'}</span> <br></br>
                                        <span className='bold'>$(function() {'{'}</span> <br></br>
                                        <span className='bold'>$("#checked2").change(function() {'{'}</span> <br></br>
                                        <span className='bold'>var set2 = this.checked;</span> <br></br>
                                        <span className='tab5 bold'>if (set2) {'}'}</span><br></br>
                                        <span className='tab10 bold'>$("#other").prop("disabled", true);</span> <br></br>
                                        <span className='tab10 bold'>$("#other2").prop("disabled", true);</span> <br></br>
                                        <span className='tab10 bold'>$("#other3").prop("disabled", true);</span> <br></br>
                                        <span className='tab10 bold'>$("#other4").prop("disabled", true);</span> <br></br>
                                        <span className='tab10 bold'>$("#other5").prop("disabled", true);</span> <br></br>
                                        <span className='tab5 bold'>{'}'}</span><br></br>
                                        <span className='tab5 bold'>else {'}'}</span><br></br>
                                        <span className='tab10 bold'>$("#other").prop("disabled", false);</span><br></br>
                                        <span className='tab5 bold'>{'}'}</span><br></br>
                                        <span className='bold'>{'});'}</span> <br></br>
                                        <span className='bold'>{'});'}</span> <br></br>
                                        <span className='bold'>{'});'}</span> <br></br>
                                        <span className='bold'>{'</script>'}</span> <br></br>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                    </Accordion>
                </div>

            </Card>
            
        </div>
    )
}


