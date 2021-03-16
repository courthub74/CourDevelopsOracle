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
                            <span>class User:</span> <br></br>
                            <span className='tab5 red'>pass</span><br></br>
                            <br></br>
                            <span>user1 = User()</span><br></br>
                            <span>user1.first_name = "Courtney"</span><br></br>
                            <span>user1.last_name = "Jacobs"</span><br></br>
                            <span>user1.age = 43</span><br></br>
                            <br></br>
                            <span>print(user1.first_name)</span><br></br>
                            <span>print(user1.last_name)</span><br></br>
                            <span>print(user1.age)</span><br></br>
                            <br></br>
                            <span>user2 = User() <span className='notes'>#Basically you just said that you want user2 to fall under the user class</span></span><br></br>
                            <span>user2.first_name = "Charlize"</span><br></br>
                            <span>user2.last_name = "Theron"</span><br></br>
                            <span>user2.age = 44</span><br></br>
                            <br></br>
                            <span>print(user2.first_name)</span><br></br>
                            <span>print(user2.last_name)</span><br></br>
                            <span>print(user2.age)<span className='notes'>#Under the class you can associate different data types with the object</span></span><br></br>
                            <br></br>
                            <span className='notes'># If you create just a random first name last name they wont fall under the User class</span><br></br>
                            <span>first_name = "Arthur"</span><br></br>
                            <span>last_name = "Cake"</span><br></br>
                            <span>age = 79</span><br></br>
                            <br></br>
                            <span>print(first_name)</span><br></br>
                            <span>print(last_name)</span><br></br>
                            <span>print(age)</span><br></br>
                            <br></br>
                            <span className='notes bold'>Prints: Courtney Jacobs 43 Charlize Theron 44 Arthur Cake 79</span><br></br>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    )
}

