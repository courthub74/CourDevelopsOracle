import React from 'react'
import './pages.css';
import * as SiIcons from 'react-icons/si'
import { Card } from 'react-bootstrap';



export const WhileLoop = () => {
    return (
        <div className="whileloop">
            <Card>
                <Card.Header><h1>While Loop <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text className="texty">
                            <span className='bold'>i = 0</span><br></br>
                            <span className='bold tab5'>while i {">"} 50:</span><br></br>
                            <span className='bold tab10'>print(i)</span><br></br>
                            <br></br>
                            <span>If you run the ABOVE without adding increments 'i' will stay as zero</span><br></br>
                            <span>and print forever because it will be less than zero forever</span><br></br>
                            <br></br>
                            <span>So you add:</span><br></br>
                            <span className='bold tab10'>i = i + 1</span><br></br>
                            <span className="tab5">NOW it will add one everytime till it reaches 49 and then stop</span><br></br>
                            <br></br>
                            <br></br>
                            <span className="notes"># Another While Loop (Counter)</span><br></br>
                            <span className='bold'>counter = 100</span><br></br>
                            <span className='bold'>while counter {'>'}= 0:</span><br></br>
                            <span className='bold tab5'>print(counter)</span><br></br>
                            <br></br>
                            <span className='tab5'>If I run this it will go on forever as there is nothing</span><br></br>
                            <span className='tab5'>to increment down to zero. Counter will stay at 100 S0:</span><br></br>
                            <span className='tab5 bold'>counter = counter - 1</span><br></br>
                            <br></br>
                            <span>the last line is resetting the 'counter'</span><br></br>
                            <span>NOW it will subtract one everytime</span><br></br>
                            <span>till it reaches 0 and then stop</span><br></br>
                            <span>If that wasn't there 'counter' would be 100 forever</span><br></br>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    );
};


