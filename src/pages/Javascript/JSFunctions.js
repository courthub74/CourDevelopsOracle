import React from 'react'
import { Card, Button, ButtonGroup, Breadcrumb } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';
import { JSFuncTypes } from './FuncTypes';

export const JSFunctions = () => {
    return (
        <div className='jsfunctions'>

            <Card>

                <Card.Header><h1>Functions <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>
                    <Card.Text className='texty'>
                        A function is a block of code which only runs when it is called.<br></br>

                        You can pass data, known as parameters, into a function.<br></br>

                        A function can return data as a result.
                    </Card.Text >
                    
                    <Card.Text className="texty bold">
                        <span>function Hello() {'{'}</span><br></br>
                        <span className='tab5'>console.log("Bonjour")</span><br></br>
                        <span>{'}'}</span>
                    </Card.Text>

                    {/* <Breadcrumb size='sm'>
                        {JSFuncTypes.map((item, index) => {
                            return (
                                <Breadcrumb size="sm" key={index}>
                                    <Breadcrumb className={item.cName} href={item.url}>
                                        {item.title}
                                    </Breadcrumb>
                                </Breadcrumb>
                            )
                        })}
                    </Breadcrumb> */}
                        

                    <ButtonGroup size="sm">
                        {JSFuncTypes.map((item, index) => {
                            return (
                                <ButtonGroup className="jsfuncbuttons" size="sm" key={index}>
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


