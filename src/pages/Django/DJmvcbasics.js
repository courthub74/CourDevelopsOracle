import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJmvcbasics = () => {
    return (
        <div className='djmvcbasics'>

            <Card>
                <Card.Header><h1><SiIcons.SiDjango /> MVC Basics <SiIcons.SiPython />
                </h1></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <SiIcons.SiDjango />ango is <span className='bold'>MVC</span> architecture <br></br>     
                        <br></br>   

                        {/* MODELS.PY */}
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                        MODELS.PY
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span className='bold'>class deliverables(models.Model):</span> <br></br>
                                                <span className='bold tab5'>delivs = models.CharField(max_length=200)</span> <br></br>
                                                <span className='bold tab5'>completeddelivs = models.BooleanField</span> <br></br>
                                                <span className='bold tab10'>(default=False)</span> <br></br>
                                                <br></br>
                                                <span className='bold tab5'>def __str__(self):</span> <br></br>
                                                <span className='bold tab5'>return self.delivs</span> <br></br>
                                                <br></br>
                                                <span>A model is a class that represents table</span><br></br>
                                                <span>or collection in our DB, and where every</span><br></br>
                                                <span>attribute of the class is a field of the</span><br></br>
                                                <span> table or collection.</span>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            

                        {/* VIEWS.PY */}
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                        VIEWS.PY
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span className='bold'>from .models import deliverables</span> <br></br>
                                                <br></br>
                                                <span className='bold'>def deliverables(request):</span> <br></br>
                                                <span className='bold tab5'>all_delivs = Deliverables.objects.all</span> <br></br>
                                                <span className='bold tab5'>return render(request, 'deliverables.html',</span> <br></br>
                                                <span className='bold tab10'>{'{"all_delivs": all_delivs}'})</span> <br></br>
                                                <br></br>
                                                <span>A VIEW function, or “view” for short,</span><br></br>
                                                <span>is simply a Python function that takes</span><br></br>
                                                <span>a web request and returns a web response.</span><br></br>
                                                <span> This response can be the HTML contents</span><br></br>
                                                <span> of a Web page, or a redirect, or a 404</span><br></br>
                                                <span>error, or an XML document, or an image, etc.</span>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>
                            </Accordion>


                        {/* URLS.PY */}
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                        URLS.PY
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span className='bold'>from . import views</span> <br></br>
                                                <br></br>
                                                <span className='bold'>urlpatterns = {'['}</span> <br></br>
                                                <span className='bold tab5'>path('deliverables/',</span> <br></br>
                                                <span className='bold tab10'>views.deliverables,</span> <br></br>
                                                <span className='bold tab15'>name='deliverables'),</span> <br></br>
                                                <span className='bold tab10'>{']'}</span> <br></br>
                                                <br></br>
                                                <span>After we have working views,</span><br></br>
                                                <span>we access them through URLS</span><br></br>
                                                <span>Here is a basic url.py file</span><br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>
                            </Accordion>


                        {/* DELIVERABLES.HTML */}
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className='texty2'>
                                    DELIVERABLES.HTML
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span className='bold'>{'{ %if all_delivs% }'}</span> <br></br>
                                                <span className='bold'>{"<ul>"}</span> <br></br>
                                                <span className='bold'>{'{ % for things in all_delivs % }'}</span> <br></br>
                                                <span className='bold tab10'>{'<li>{{ all_delivs }}<li>'}</span> <br></br>
                                                <span className='notes tab10'>{'<!--All Objects in the Deliverables Table-->'}</span> <br></br>
                                                <span className='bold tab10'>{'<li>{{ things.delivs }} |'}</span> <br></br>
                                                <span className='bold tab15'>{'{{ things.completeddelivs }}<li>'}</span> <br></br>
                                                <span className='notes tab10'>{'<!--Breaks those objects'}</span> <br></br>
                                                <span className='notes tab15'>{'down by rendering directly'}</span> <br></br>
                                                <span className='notes tab15'>{'from models.py-->'}</span> <br></br>
                                                <span className='bold tab10'>{'<li>{{ all_delivs }}<li>'}</span> <br></br>
                                                <span className='bold tab5'>{'{ %endfor% }'}</span> <br></br>
                                                <span className='bold tab5'>{'</ul>'}</span> <br></br>
                            
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

