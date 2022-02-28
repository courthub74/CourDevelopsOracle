import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJmodels = () => {
    return (
        <div className='djmodels'>

            
            <Card>
                <Card.Header><h1 className='black'><SiIcons.SiDjango /> Models (database) <SiIcons.SiPython /> </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>

                            <Accordion>

                                {/* IN MODELS.PY */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Create it in MODELS.PY 
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>you create a CLASS like below:</span> <br></br>
                                                <span>you can call it whatever you need</span> <br></br>
                                                <span>In this case, it's the 'Items' class</span> <br></br>
                                                <br></br>
                                                <span className='bold'>class Items(models.Model):</span> <br></br>
                                                <span className='bold tab5'>item1 = models.CharField()</span> <br></br>
                                                <span className='bold tab5'>item2 = models.BooleanField()</span> <br></br>
                                                <span className='bold tab5'>item2 = models.BooleanField()</span> <br></br>
                                                <span className='bold tab5'>item4 = models.IntegerField()</span> <br></br>
                                                <span className='bold tab5'>def __str__(self):</span> <br></br>
                                                <span className='bold tab10'>return self.item1</span> <br></br>
                                                <span className='notes tab15'>#always do the first item</span> <br></br>
                                                <span className='notes tab15'>on the class list</span> <br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* IN ADMIN.PY */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        next go to ADMIN.PY
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className='texty'>
                                                
                                                <span className='bold'>from .models import Items</span> <br></br>
                                                <br></br>
                                                <span className='notes'>#or from ALL models import</span> <br></br>
                                                <span className='notes tab5'>Items class</span> <br></br>
                                                <hr></hr>
                                                <span>now register your model</span> <br></br>
                                                <span className='bold'>admin.site.register(Items)</span> <br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>


                                {/* IN CMD */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        then go to CMD/CLI and type: 
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className='texty'>
                                                <span>you create a CLASS like below:</span> <br></br>
                                                <span>you can call it whatever you need</span> <br></br>
                                                <span>In this case, it's the 'Items' class</span> <br></br>
                                                <br></br>
                                                <span className='bold'><li>python manage.py makemigrations</li></span> <br></br>
                                                <br></br>
                                                <span>then....</span> <br></br>
                                                <br></br>
                                                <span className='bold'><li>python manage.py migrate</li></span> <br></br>
                                                <hr></hr>
                                                <span>NOW you can go into admin and add data</span> <br></br>
                                                <span className='tab5'>to newly created table</span> <br></br>
                                                
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

