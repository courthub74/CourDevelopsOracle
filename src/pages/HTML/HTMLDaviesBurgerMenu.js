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
                                                        <input type="text" name="patty"
                                                        id="patty"/>
                                                    </section>

                                                    <hr></hr>

                                                    <section class="patties">
                                                        <label for="amount">How many patties
                                                        would you like?</label>
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
            <div>

                <Card>

                    <Card.Header><h3>HTML Davies Burger Menu Code <AiIcons.AiFillHtml5 /></h3></Card.Header>

                        <Card.Body>
                            <Card.Text>

                                This is second Card

                            </Card.Text>
                        </Card.Body>
                </Card>

            </div>
            
        </div>
    )
}

