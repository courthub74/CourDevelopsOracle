import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './javascript.css';
import { JSFuncDecs } from './LISTFuncDeclaration';

export const JSFuncDeclaration = () => {
    return (
        <div className='jsfuncdec'>

            <Card>
                <Card.Header><h3>Functions W.Function Declaration <SiIcons.SiJavascript/></h3></Card.Header>

                <Card.Body>

                    <Card.Text className='texty'>
                        <span>function volumeOfCube (side) {'{'}</span> <br></br>
                        <span className='tab5'>return side * side * side;</span> <br></br>
                        <span>{'}'}</span> <br></br>
                        <span>volumeOfCube(5);</span> <br></br>
                        <span className='notes bold'>{'// Prints: 125'}</span> <br></br>
                    </Card.Text>

                    <ButtonGroup size="sm">
                            {JSFuncDecs.map((item, index) => {
                                return (
                                    <ButtonGroup className="jsfuncdecbuttons" size="sm" key={index}>
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

