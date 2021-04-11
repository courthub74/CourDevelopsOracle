import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './django.css'

export const DJsetup = () => {
    return (
        <div className='djsetup'>

            

            <Card>
                <Card.Header><h1><SiIcons.SiDjango />ango Setup <SiIcons.SiPython /> </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>

                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Initial Setup and Installation
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>Create the Directory</span> <br></br>
                                                <span className='bold tab5'>mkdir (project)</span> <br></br>
                                                <hr></hr>
                                                <span>install virtualenv</span> <br></br>
                                                <span className='bold tab5'>virtualenv 'venv'</span> <br></br>
                                                <hr></hr>
                                                <span>turn on virtualenv</span> <br></br>
                                                <span className='bold tab5'>. venv/Scripts/activate</span> <br></br>
                                                <hr></hr>
                                                <span>while in virtualenv:</span> <br></br>
                                                <span className='tab5'>install django</span> <br></br>
                                                <span className='bold tab10'>pip install django</span> <br></br>
                                                <hr></hr>
                                                <span>create a project</span> <br></br>
                                                <span className='bold tab5'>django-admin.py startproject</span> <br></br>
                                                <span className='bold tab15'>'project name'</span> <br></br>
                                                <span className='notes'>#if not working try without .py</span> <br></br>
                                                <hr></hr>
                                                <span>open text editor and attach the folder to it</span> <br></br>
                                                <hr></hr>
                                                <span>in your (project) folder runserver:</span> <br></br>
                                                <span className='bold tab5'>python manage.py runserver</span> <br></br>
                                                <hr></hr>
                                                <span>then in same folder:</span> <br></br>
                                                <span className='bold tab5'>python manage.py migrate</span> <br></br>
                                                <span className='notes'>#creates admin screen</span> <br></br>
                                                <hr></hr>
                                                <span>then in same folder:</span> <br></br>
                                                <span className='bold tab5'>python manage.py createsuperuser</span> <br></br>
                                                <br></br>
                                                <span className='texty3'>NOTE: if doesn't work use:</span> <br></br>
                                                <span className='texty3 tab5'>winpty python manage.py createsuperuser</span> <br></br>
                                                <hr></hr>
                                                <span>set up user name and password</span> <br></br>
                                                
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Starting the App
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className='texty'>
                                                <span>then in same folder type:</span> <br></br>
                                                <span className='bold tab5'>python manage.py startapp 'newapp'</span> <br></br>
                                                <span className='notes'># 'newapp' is the name of the newly created</span> <br></br>
                                                <span className='notes tab5'> app included are the admin | apps |</span> <br></br>
                                                <span className='notes tab10'>| models | tests | urls | views</span> <br></br>
                                                <hr></hr>
                                                <span>in your new app folder:</span> <br></br>
                                                <span className='tab5'>create a 'urls.py' file</span> <br></br>
                                                <hr></hr>
                                                <span>in main folder(project):</span> <br></br>
                                                <span className='tab5'>in SETTINGS.py add the newly created app</span> <br></br>
                                                <span className='tab10'>(newapp) under 'INSTALLED APPS'</span> <br></br>
                                                <hr></hr>
                                                <span>in (newapp) urls.py add the bear bones:</span> <br></br>
                                                <br></br>
                                                <span className='bold'>from django.urls import path</span> <br></br>
                                                <span className='bold'>urlpatterns = {'['}</span> <br></br>
                                                <br></br>
                                                <span className='bold'>{']'}</span> <br></br>
                                                <hr></hr>
                                                <span>create a VIEW or VIEWS:</span> <br></br>
                                                <br></br>
                                                <span>the 'views.py' is created automatically</span> <br></br>
                                                <span>in your (newapp)</span> <br></br>
                                                <span>to create a view is similar to creating</span> <br></br>
                                                <span>a new page in flask, with a function. so for</span> <br></br>
                                                <span>basic home page you would do:</span> <br></br>
                                                <br></br>
                                                <span className='bold'>def home(request):</span> <br></br>
                                                <span className='tab5 notes'>#pass a request thru function because the</span> <br></br>
                                                <span className='tab10 notes'>browser is requesting that a page</span> <br></br>
                                                <span className='tab15 notes'>be shown</span> <br></br>
                                                <span className='bold'>return render(request, "home.html", {})</span> <br></br>
                                                <br></br>
                                                <span> CREATE ONE OF THESE FOR EACH PAGE!</span> <br></br>
                                                <span>about me | about them | next page | etc.</span> <br></br>
                                                <hr></hr>
                                                <span>create TEMPLATES to match each VIEW:</span> <br></br>
                                                <br></br>
                                                <span>inside the (newapp) folder:</span> <br></br>
                                                <span className='tab5'>create a 'templates' folder for html files</span> <br></br>
                                                <span className='tab10'>and layout the desired html files</span> <br></br>
                                                <span className='tab10'>that you created in VIEWS</span> <br></br>
                                                <hr></hr>
                                                <span>go to (newapp) urls.py,</span> <br></br>
                                                <span>import all from views and</span> <br></br>
                                                <span>add the paths for each view:</span> <br></br>
                                                <br></br>
                                                <span>example:</span> <br></br>
                                                <br></br>
                                                <span>from django.urls import path from . import views</span> <br></br>
                                                <br></br>
                                                <span className='bold'>urlpatterns = {'['}</span> <br></br>
                                                <span className='bold tab5'>path(' ', views.home, name='home'),</span> <br></br>
                                                <span className='bold tab5'>path('about/', views.about, name='about'),</span> <br></br>
                                                <span className='bold'>{']'}</span> <br></br>
                                                <hr></hr>
                                                <span>NOW to add future pages</span> <br></br>
                                                <span className='tab5'>resort to (newapp) urls.py </span> <br></br>
                                                <span className='tab10'>and add it in path:</span> <br></br>
                                                <br></br>
                                                <span>exemple:</span> <br></br>
                                                <br></br>
                                                <span className='bold'>from django.urls import path</span> <br></br>
                                                <span className='bold'>from . import views</span> <br></br>
                                                <br></br>
                                                <span className='bold'>urlpatterns = {'['}</span> <br></br>
                                                <span className='bold tab5'>path(' ', views.home, name='home'),</span> <br></br>
                                                <span className='bold tab5'>path('about/', views.about, name='about'),</span> <br></br>
                                                <span className='bold tab5'>path('newpage/', views.newpage, name='newpage'),</span> <br></br>
                                                <span className='bold'>{']'}</span> <br></br>
                                                <hr></hr>
                                                <span className='bold'>THEN go to views.py in (newapp) and add view:</span> <br></br>
                                                <br></br>
                                                <span className='bold notes'>#HOME</span> <br></br>
                                                <br></br>
                                                <span className='bold'>def home(request):</span> <br></br>
                                                <span className='bold'>return render(request, "home.html", {'{}'})</span> <br></br>
                                                <hr></hr>
                                                <span className='bold green'>#ABOUT</span> <br></br>
                                                <br></br>
                                                <span className='bold'>def about(request):</span> <br></br>
                                                <span className='bold'>return render(request, "about.html", {'{}'})</span> <br></br>
                                                <br></br>
                                                <hr></hr>
                                                <span className='bold red'>#NEWPAGE</span> <br></br>
                                                <br></br>
                                                <span className='bold'>def about(request):</span> <br></br>
                                                <span className='bold'>return render(request, "newpage.html", {'{}'})</span> <br></br>
                                                <hr></hr>
                                                <span>THEN go to templates and create the 'newpage.html'</span> <br></br>
                                                <br></br>
                                                <span>and So Forth ...</span> <br></br>
                                                <span></span> <br></br>
                                            
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

