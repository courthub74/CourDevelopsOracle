import React from 'react';
import './pages.css';
import { Card } from 'react-bootstrap';
import * as SiIcons from 'react-icons/si';

export const ForLoop = () => {
    return (
        <div className="forloop">
            <Card>
                <Card.Header><h1>For Loop <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>
                        <Card.Text className="texty">
                            <span className='bold'>ladies = ["Janet", "Tahani", "Elanore"]</span> <br></br>
                            <span className='bold'>for x in ladies</span> <br></br>
                            <span className='bold tab5'>print(x)</span> <br></br>
                            <br></br>
                            <span className="notes"># ABOVE prints all 3 names</span> <br></br>
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    );
};


