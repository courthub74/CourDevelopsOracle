import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const JSArrays = () => {
    return (
        <div className='jsarrays'>  

            <Card>

                <Card.Header><h1>Arrays <SiIcons.SiJavascript/></h1></Card.Header>

                    <Card.Body>

                        <Card.Text className='texty2'>
                            <div>
                                <p>JavaScript arrays are used to store multiple values in a single variable</p>

                            {/* Elements in Arrays */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                            <span className='accordian'>Elements within Arrays</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                                <Card.Body>

                                                        <span className='blue'>// Individual elements in arrays can</span> <br></br>
                                                        <span className='blue tab5'>also be stored to variables</span><br></br>
                                                        <span className='blue'>// Create a variable named listItem</span><br></br>
                                                        <span className='blue tab5'>and set it equal to the first</span> <br></br>
                                                        <span className='blue tab5'>item in the famousSayings array using </span><br></br>
                                                        <span className='blue tab5'>square bracket notation ([])</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>const famousSayings = ['Fortune favors the brave.',</span> <br></br>
                                                        <span className='bold'>'A joke is a very serious thing.', 'Where there </span> <br></br>
                                                        <span className='bold'>is love there is life.'];</span> <br></br>
                                                        <span className='bold'>const listItem = famousSayings[0];</span> <br></br>
                                                        <span className='bold'>console.log(listItem)</span> <br></br>
                                                        <br></br>
                                                        <span className='blue'>// NOW, console.log() the third element in the</span> <br></br>
                                                        <span className='blue tab5'>famousSayings array using bracket notation to access the element</span> <br></br>
                                                        <span className='blue'>// Do not save the element to a new variable before you log it</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>console.log(famousSayings[2])</span> <br></br>
                                                        <br></br>
                                                        <span className='blue'>// Change the second element of the array groceryList to 'avocados'</span> <br></br>
                                                        <span className='bold'>let groceryList = ['bread', 'tomatoes', 'milk'];</span> <br></br>
                                                        <span className='bold'>groceryList[1] = 'avocados';</span> <br></br>
                                                        <span></span> <br></br>
                                                        <span></span> <br></br>
                                                        <span></span> <br></br>
                                                        <span></span> <br></br>
                                                </Card.Body>

                                            </Accordion.Collapse>
                                    </Card>

                            </Accordion>

                            {/* LET and CONST */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                            <span className='accordian'>LET and CONST</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                                <Card.Body>

                                                        <span className='blue'>//Variables declared with let can be reassigned</span> <br></br>
                                                        <br></br>
                                                        <span className='blue'>// Variables declared with the const keyword cannot be reassigned</span><br></br>
                                                        <br></br>
                                                        <span className='blue'>// For Exemple:</span><br></br>
                                                        <span className='bold'>let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];</span> <br></br>
                                                        <br></br>
                                                        <span className='blue'>// reassigned to just Ketchup</span><br></br>
                                                        <span className='bold'>condiments = ['Ketchup'];</span> <br></br>
                                                        <span className='bold'>console.log(condiments)</span> <br></br>
                                                        <br></br>
                                                        <span className='blue'>//To log the length of 'objectives' to the console:</span> <br></br>
                                                        <span className='bold'>const objectives = ['Learn a new languages', 'Read 52 books',</span> <br></br>
                                                        <span className='bold tab5'> 'Run a marathon'];</span><br></br>
                                                        <br></br>
                                                        <span className='bold'>console.log(objectives.length);</span> <br></br>
                                                </Card.Body>

                                            </Accordion.Collapse>
                                    </Card>

                            </Accordion>


                            {/* PUSH */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                            <span className='accordian'>PUSH</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                                <Card.Body>

                                                        <span className='blue'>//PUSH (allows you to add items to end of array)</span> <br></br>
                                                        <br></br>
                                                        <span className='blue'>// For Exemple:</span><br></br>
                                                        <span className='bold'>const itemTracker = ['item 0', 'item 1', 'item 2'];</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>itemTracker.push('item 3', 'item 4');</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>console.log(itemTracker);</span> <br></br>
                                                        <br></br>
                                                        <span className='bold blue'>//Prints</span><br></br>
                                                        <span className='blue tab5'>[ 'item 0', 'item 1', 'item 2', 'item 3', 'item 4' ]</span> <br></br>

                                                </Card.Body>

                                            </Accordion.Collapse>
                                    </Card>

                            </Accordion>


                            {/* POP */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                            <span className='accordian'>POP</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                                <Card.Body>

                                                        <span className='blue'>//POP (removes an item)</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>const newItemTracker = ['item 0', 'item 1', 'item 2'];</span> <br></br>
                                                        <span className='bold'>newItemTracker.pop();</span> <br></br>
                                                        <span className='bold'>console.log(newItemTracker)</span> <br></br>
                                                        <br></br>
                                                        <span className='bold blue'>//Prints</span><br></br>
                                                        <span className='blue tab5'>['item 0', 'item 1']</span> <br></br>
                                                        
                                                </Card.Body>

                                            </Accordion.Collapse>
                                    </Card>

                            </Accordion>


                            {/* SLICE */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                            <span className='accordian'>SLICE</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                                <Card.Body>

                                                        <span className='blue'>//You’re in a hurry so you decide</span> <br></br>
                                                        <span className='blue tab5'>ask a friend to help you with your grocery shopping.</span> <br></br>
                                                        <span className='blue tab5'>You want him to pick up the 'bananas',</span> <br></br>
                                                        <span className='blue tab5'> 'coffee beans', and 'brown rice'.</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>const groceryList2 = ['orange juice', 'bananas',</span> <br></br>
                                                        <span className='bold tab5'>'coffee beans', 'brown rice', 'pasta',</span> <br></br>
                                                        <span className='bold tab5'> 'coconut oil', 'plantains'];</span> <br></br>
                                                        <span className='bold'>console.log(groceryList2.slice(1,4));</span> <br></br>                                    
                                                </Card.Body>

                                            </Accordion.Collapse>
                                    </Card>

                            </Accordion>


                            {/* NESTED */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                            <span className='accordian'>NESTED</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                            <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>

                                                <Card.Body> 
                                                        <span className='bold'>const numberClusters = [[1,2], [3,4],[5,6]];</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>const target = numberClusters[2][1];</span> <br></br>
                                                        <span className='blue'>//Targets third bracket, 2nd element</span> <br></br>
                                                        <br></br>
                                                        <span className='bold'>console.log(target);</span> <br></br> 
                                                        <span className='blue'>//6</span> <br></br>                                   
                                                </Card.Body>

                                            </Accordion.Collapse>
                                    </Card>

                            </Accordion>



                            </div>

                        </Card.Text>

                    </Card.Body>

            </Card>
            
        </div>
    )
}


