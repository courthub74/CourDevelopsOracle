import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const AllenIverson = () => {
    return (
        <div className='alleniverson'>

            <Card>

                <Card.Header><h1 className='black'>Allen Iverson <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty3'>

                        <div>

                            function myFunction() {'{'}<br></br>
                                    document.getElementById("demo").innerHTML = "Paragraph changed.";<br></br>
                                    {'}'}<br></br>
                                    <br></br>
                                    firstName = "Court"<br></br>
                                    other = "We Talkin about Practice man!"<br></br>
                                    <br></br>
                                    if (firstName == "Fred"){'{'}<br></br>
                                    if (i % 3 == 0 {'&&'} i % 5 == 0){'{'}<br></br>
                                    document.getElementById("demo").innerHTML = firstName;<br></br>
                                    {'}'}else if (firstName == "Jay"){'{'}<br></br>
                                    document.getElementById("demo").innerHTML = "Hello there Jay!"<br></br>
                                    {'}'} else {'{'}<br></br>
                                    document.getElementById("demo").innerHTML = other;<br></br>
                                    <br></br>
                                    {'< script >'}<br></br>
                                    basketball = "Not-not the Game"<br></br>
                                    if (basketball == "Toy" || 4 == 4){'{'}<br></br>
                                    document.getElementById("iverson").innerHTML = basketball;<br></br>
                                    {'}'}<br></br>
                                    {'< /script >'}<br></br>
                                    <br></br>
                                    {'< script >'}<br></br>
                                    hockey = "Hockey"<br></br>
                                    document.getElementById("hockey").innerHTML = hockey;<br></br>
                                    {'//Below is a FOR Loop'}<br></br>
                                    for (i = 0; i {'<'} 10; i++){'{'}<br></br>
                                    document.write(i + ".hat trick {'< br/>'}");<br></br>
                                    {'}'}<br></br>
                                    {'< /script >'}<br></br>
                                    <br></br>
                                    {'< script >'}<br></br>
                                    football = "Football"<br></br>
                                    document.getElementById("football").innerHTML = football;<br></br>
                                    {'//Below is a WHILE Loop'}<br></br>
                                    var i = 0;<br></br>
                                    while (i {'<'} 10){'{'}<br></br>
                                    document.write(i + ".screen pass {'< br/>'}");<br></br>
                                    i++; {'//if you dont have the counter (i++) program will crash'}<br></br>
                                    {'}'}<br></br>
                                    {'< /script >'}<br></br>

                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
            
        </div>
    )
}

