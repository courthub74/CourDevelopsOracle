import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';
import { JSFuncParamsButtons } from './FuncParamButton';

export const JSFuncParam = () => {
    return (
        <div className='jsfunctions'>
            <Card>

                <Card.Header><h1>Functions W.Parameters <SiIcons.SiJavascript/></h1></Card.Header>

                    <Card.Body>

                        <Card.Text className='texty'>
                            <span>function groups(gr1, gr2) {'{'}</span> <br></br>
                            <span className='tab5'>console.log("One of my fave Hip Hop groups is " + gr1)</span> <br></br>
                            <span className='tab5'>console.log("Another one of my fave Hip Hop groups is " + gr2)</span> <br></br>
                            <span>{'}'}</span> <br></br>
                            <span>groups("Gang Starr", "Public Enemy")</span> <br></br>
                            <br></br>
                            <span className='notes'>{'// Prints: One of my fave Hip Hop groups is Gang Starr'}</span> <br></br>
                            <span className='notes tab5'>Another on of my fave Hip Hop groups is Public Enemy</span> <br></br>
                        </Card.Text>

                        <ButtonGroup size="sm">
                            {JSFuncParamsButtons.map((item, index) => {
                                return (
                                    <ButtonGroup className="jsfuncparambuttons" size="sm" key={index}>
                                        <Button className={item.cName} href={item.url}>
                                            {item.title}
                                        </Button>
                                    </ButtonGroup>
                                )
                            })}
                        </ButtonGroup>

                    </Card.Body>

            </Card>

            
            
        </div>
    )
}

