import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './javascript.css';
import { JSArrowMulti } from './LISTArrowMultiLine';

export const JSFuncNotationMultiLine = () => {
    return (
        <div className='jsarrowmulti'>
            <Card>

                <Card.Header><h1>Functions W.Arrow Notation/Multi-Line Block <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty'>
                        <span>const quantity = number ={'>'} {'{'}</span> <br></br>
                        <span className='tab5'>const sum = number + number;</span> <br></br>
                        <span className='tab5'>return sum;</span> <br></br>
                        <span>{'}'}</span> <br></br>
                        <span>console.log(quantity(4,4))</span> <br></br>
                        <br></br>
                        <span className='notes bold'>{'// Prints: 8'}</span> <br></br>
                    </Card.Text>

                    <ButtonGroup size="sm">
                        {JSArrowMulti.map((item, index) => {
                            return (
                                <ButtonGroup className='blueberry' size='sm' key={index}>
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
