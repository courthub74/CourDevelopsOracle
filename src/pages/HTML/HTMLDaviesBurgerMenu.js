import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLDaviesBurgerMenu = () => {
    return (
        <div className='htmldaviesmenu'>



        {/* The Menu */}
            <div className='pad1'>

            
                <Card>

                    <Card.Header><h3>HTML Davies Burger Menu <AiIcons.AiFillHtml5 /></h3></Card.Header>

                        <Card.Body>
                            <Card.Text className='texty'>

                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Welcome to Davies Burgers
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='0'>
                                        <Card.Body className='texty'>
                                            <form action="submission.html"
                                                        method="POST"/>
                                                    Place Order Below!

                                                    <hr></hr>

                                                    <section class="protein">
                                                        <label for="patty">What type of protein
                                                        would you like?</label>
                                                        <br></br>
                                                        <input type="text" name="patty"
                                                        id="patty"/>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="patties">
                                                        <label for="amount">How many patties
                                                        would you like?</label>
                                                        <br></br>
                                                        <input type="number" name="amount"
                                                        id="amount"/>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="cooked">
                                                        <label for="doneness">How do you
                                                        want your patty cooked</label>
                                                        <br></br>
                                                        <span>Rare</span>
                                                        <input type="range"
                                                        name="doneness" id="doneness"
                                                        value="3" min="1" max="5"/>
                                                        <span>Well-Done</span>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="toppings">
                                                        <span>What toppings would you
                                                        like?</span>
                                                        <br></br>
                                                        <br></br>

                                                        <input type="checkbox" name="topping"
                                                        id="lettuce" value="lettuce"/>
                                                        <label for="lettuce">Lettuce</label>
                                                        <br></br>

                                                        <input type="checkbox" name="topping"
                                                        id="tomato" value="tomato"/>
                                                        <label for="tomato">Tomato</label>
                                                        <br></br>

                                                        <input type="checkbox" name="topping"
                                                        id="onion" value="onion"/>
                                                        <label for="onion">Onion</label>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="cheesy">
                                                    <span>Would you like to add cheese?
                                                    </span>

                                                    <br></br>
                                                    <br></br>

                                                    <input type="radio" name="cheese"
                                                    id="yes" value="yes"/>
                                                    <label for="yes">Yes</label>
                                                    <br></br>
                                                    <input type="radio" name="cheese"
                                                    id="no" value="yes"/>
                                                    <label for="no">No</label>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="bun-type">
                                                        <label for="bun">What type of bun
                                                        would you like?</label>
                                                        <select name="bun" id="bun">
                                                        <option value=
                                                        "sesame">Sesame</option>
                                                        <option value="potato">
                                                        Potato</option>
                                                        <option
                                                        value="pretzel">Pretzel</option>
                                                        </select>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="sauce-selection">
                                                        <label for="sauce">What type of sauce
                                                        would you like?</label>
                                                        <input list="sauces" id="sauce"
                                                        name="sauce" placeholder="enter or
                                                        select here"/>
                                                        <datalist id="sauces"/>
                                                        <option value="ketchup"></option>
                                                        <option value="mayo"></option>
                                                        <option value="mustard"></option>
                                                    </section>

                                                    <section class="extra-info">
                                                        <label for="extra">Anything else you
                                                        want to add?</label>
                                                        <br></br>
                                                        <textarea id="extra" name="extra"
                                                        rows="3" cols="40"></textarea>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="submission">
                                                        <input type="submit" value="Submit"/>
                                                    </section>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            </Card.Text>
                        </Card.Body>
                </Card>

            </div>

        {/* The Code */}
            <div className='htmldaviesmenu'>

                <Card>

                    <Card.Header><h3>HTML Davies Burger Menu Code <AiIcons.AiFillHtml5 /></h3></Card.Header>

                        <Card.Body>
                            <Card.Text className='texty'>

                                        <Accordion>
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                        Click here for Code behind the Menu
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey='1'>
                                                    <Card.Body className='texty4'>

                                                        <span className='bold'>{'<form action="submission.html"'}</span> <br></br>
                                                        <span className='bold tab5'>{'method="POST">'}</span> <br></br>
                                                        <span className='bold'>{'<h1>Create a burger!</h1>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="protein">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="patty">What type of protein'}</span> <br></br>
                                                        <span className='bold tab5'>{'would you like?</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="text" name="patty" id="patty">'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<section class="patties">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="amount">How many patties'}</span> <br></br>
                                                        <span className='bold tab5'>{'would you like?</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="number" name="amount"'}</span> <br></br>
                                                        <span className='bold tab5'>{'id="amount">'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="cooked">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="doneness">How do you'}</span> <br></br>
                                                        <span className='bold tab5'>{'want your patty cooked</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<br>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<span>Rare</span>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="range"'}</span> <br></br>
                                                        <span className='bold tab5'>{'name="doneness" id="doneness"'}</span> <br></br>
                                                        <span className='bold tab5'>{'value="3" min="1" max="5">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<span>Well-Done</span>'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="toppings">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<span>What toppings would you'}</span> <br></br>
                                                        <span className='bold tab5'>{'like?</span>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<br>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="checkbox" name="topping"'}</span> <br></br>
                                                        <span className='bold tab5'>{'id="lettuce" value="lettuce">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="lettuce">Lettuce</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="checkbox" name="topping"'}</span> <br></br>
                                                        <span className='bold tab5'>{'id="tomato" value="tomato">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="tomato">Tomato</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="checkbox" name="topping"'}</span> <br></br>
                                                        <span className='bold tab5'>{'id="onion" value="onion">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="onion">Onion</label>'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="cheesy">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<span>Would you like to add cheese?'}</span> <br></br>
                                                        <span className='bold tab5'>{'</span>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<br>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="radio" name="cheese"'}</span> <br></br>
                                                        <span className='bold tab5'>{'id="yes" value="yes">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="yes">Yes</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="radio" name="cheese"'}</span> <br></br>
                                                        <span className='bold tab5'>{'id="no" value="yes">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="no">No</label>'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="bun-type">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="bun">What type of bun'}</span> <br></br>
                                                        <span className='bold tab5'>{'would you like?</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<select name="bun" id="bun">'}</span> <br></br>
                                                        <span className='bold tab10'>{'<option value='}</span> <br></br>
                                                        <span className='bold tab10'>{'"sesame">Sesame</option>'}</span> <br></br>
                                                        <span className='bold tab10'>{'<option value="potato">'}</span> <br></br>
                                                        <span className='bold tab10'>{'Potato</option>'}</span> <br></br>
                                                        <span className='bold tab10'>{'<option'}</span> <br></br>
                                                        <span className='bold tab10'>{'value="pretzel">Pretzel</option>'}</span> <br></br>
                                                        <span className='bold tab5'>{'</select>'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="sauce-selection">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="sauce">What type of sauce'}</span> <br></br>
                                                        <span className='bold tab5'>{'would you like?</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input list="sauces" id="sauce"'}</span> <br></br>
                                                        <span className='bold tab5'>{'name="sauce" placeholder="enter or'}</span> <br></br>
                                                        <span className='bold tab5'>{'select here">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<datalist id="sauces">'}</span> <br></br>
                                                        <span className='bold tab10'>{'<option value="ketchup"></option>'}</span> <br></br>
                                                        <span className='bold tab10'>{'<option value="mayo"></option>'}</span> <br></br>
                                                        <span className='bold tab10'>{'<option value="mustard"></option>'}</span> <br></br>
                                                        <span className='bold tab5'>{'</datalist>'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'</hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="extra-info">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<label for="extra">Anything else you'}</span> <br></br>
                                                        <span className='bold tab5'>{'want to add?</label>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<br>'}</span> <br></br>
                                                        <span className='bold tab5'>{'<textarea id="extra" name="extra"'}</span> <br></br>
                                                        <span className='bold tab5'>{'rows="3" cols="40"></textarea>'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                                        <span className='bold'>{'<hr>'}</span> <br></br>
                                                        <span className='bold'>{'<section class="submission">'}</span> <br></br>
                                                        <span className='bold tab5'>{'<input type="submit" value="Submit">'}</span> <br></br>
                                                        <span className='bold'>{'</section>'}</span> <br></br>
                                        
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>

                            </Card.Text>
                        </Card.Body>
                </Card>

            </div>
            
        </div>
    )
}

