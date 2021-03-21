import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const Classes = () => {
    return (
        <div className="classes">
            <Card>
                <Card.Header><h1>Classes <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text className="texty">
                            <span className="notes">#Classes Basics</span><br></br>
                            <br></br>
                            <span className='bold'>class User:</span> <br></br>
                            <span className='tab5 red'>pass</span><br></br>
                            <br></br>
                            <span className='bold'>user1 = User()</span><br></br>
                            <span className='bold'>user1.first_name = "Courtney"</span><br></br>
                            <span className='bold'>user1.last_name = "Jacobs"</span><br></br>
                            <span className='bold'>user1.age = 43</span><br></br>
                            <br></br>
                            <span className='bold'>print(user1.first_name)</span><br></br>
                            <span className='bold'>print(user1.last_name)</span><br></br>
                            <span className='bold'>print(user1.age)</span><br></br>
                            <br></br>
                            <span className='bold'>user2 = User()</span> <span className='notes'>#Basically you just said that you want user2 to fall under the user class</span><br></br>
                            <span className='bold'>user2.first_name = "Charlize"</span><br></br>
                            <span className='bold'>user2.last_name = "Theron"</span><br></br>
                            <span className='bold'>user2.age = 44</span><br></br>
                            <br></br>
                            <span className='bold'>print(user2.first_name)</span><br></br>
                            <span className='bold'>print(user2.last_name)</span><br></br>
                            <span className='bold'>print(user2.age)</span><span className='notes'>#Under the class you can associate different data types with the object</span><br></br>
                            <br></br>
                            <span className='notes'># If you create just a random first name last name they wont fall under the User class</span><br></br>
                            <span className='bold'>first_name = "Arthur"</span><br></br>
                            <span className='bold'>last_name = "Cake"</span><br></br>
                            <span className='bold'>age = 79</span><br></br>
                            <br></br>
                            <span className='bold'>print(first_name)</span><br></br>
                            <span className='bold'>print(last_name)</span><br></br>
                            <span className='bold'>print(age)</span><br></br>
                            <br></br>
                            <span className='notes'>Prints: Courtney Jacobs 43 Charlize Theron 44 Arthur Cake 79</span><br></br>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    )
}

