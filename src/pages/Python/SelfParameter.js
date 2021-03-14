import React from 'react'
import { Card } from 'react-bootstrap'
import './pages.css'
import * as SiIcons from 'react-icons/si';


export const SelfParameter = () => {
    return (
        <div className="selfparam">
            <Card className="card">
                <Card.Header>
                <h1>Self Parameter <SiIcons.SiPython /></h1>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="texty">
                    The self parameter is a reference to the current instance of the class<br></br>

                    is used to access variables that belong to the class
                    </Card.Text>
                    <Card.Text className="bold">
                        <span>class Player:</span><br></br>
                        <span className='tab5'>def __init__(self, name, ppg):</span><br></br>
                        <span className='tab5'>self.name = name</span><br></br>
                        <span className='tab5'>self.ppg = ppg</span><br></br>
                        <br></br>
                        <span className='tab5'>def printstat(a,b):</span><br></br>
                        <span className='tab10'>print(str(a.name) + " Averages "</span><br></br>
                        <span className='tab10'>+ str(b.ppg) + " ppg" )</span><br></br>
                        <br></br>
                </Card.Text>
                <Card.Text>
                        <span>Make sure that the def is indented properly</span><br></br>
                        <span>under the class or you will get an error stating:</span><br></br>
                        <br></br>
                        <span className="bold">'Player' has no attribute 'printstat'</span>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


