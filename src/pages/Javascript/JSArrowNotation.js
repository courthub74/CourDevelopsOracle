import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';
import './javascript.css';
import { JSArrowNotation } from './LISTArrowNotation';

export const JSArrowNotationfunc = () => {
    return (
        <div className='jsarrownotation'>
            <Card>
                <Card.Header><h1>Functions W.Arrow Notation <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>

                        <Card.Text className='texty'>
                            <span className='notes'>// Function using arrow notation</span> <br></br>
                            <span className='notes'>// This is like same as ABOVE but instead of using 'function' you use an ={'>'}</span> <br></br>
                            <span>const calculate_age = (current_year, birth_year) ={'>'}</span> <br></br>
                            <span className='tab5'>const age = current_year - birth_year;</span> <br></br>
                            <span className='tab5'>return age;</span> <br></br>
                            <span>{'}'}</span> <br></br>
                            <span>console.log(calculate_age(2020,1976))</span> <br></br>
                            <br></br>
                            <span className='notes bold'>// Prints: 44</span> <br></br>
                        </Card.Text>

                        <ButtonGroup size="sm">
                            {JSArrowNotation.map((item, index) => {
                                return (
                                    <ButtonGroup className="jsarrowbuttons" size="sm" key={index}>
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

