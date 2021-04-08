import React from 'react'
import { Card, Badge, Button, Accordion, Table } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai';
import './html.css'

export const HTMLtables = () => {
    return (
        <div className='htmltables'>

            <Card>

            <Card.Header><h1>HTML Tables <AiIcons.AiFillHtml5 /></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty'>

                        <p>BELOW makes an HTML table:</p>
                            <span className='bold'> {'<table>'} </span> <br></br>
                            <span className='bold tab5'> {'<thead>'} </span> <br></br>
                            <span className='bold tab10'> {'<th>Weather App</th>'} </span> <br></br>
                            <span className='bold tab15'> {'<th scope="col">Saturday</th>'} </span> <br></br>
                            <span className='bold tab15'> {'<th scope="col">Sunday</th>'} </span> <br></br>
                            <span className='bold tab15'> {'<th scope="col">Monday</th>'} </span> <br></br>
                            <span className='bold tab15'> {'<th scope="col">Tuesday</th>'} </span> <br></br>
                            <span className='bold tab5'> {'</tr>'} </span> <br></br>
                            <span className='bold tab5'> {'<tr>'} </span> <br></br>
                            <span className='bold tab10'> {'<th scope="row">Temperature</th>'} </span> <br></br>
                            <span className='bold tab20'> {'<td>73</td>'} </span> <br></br>
                            <span className='bold tab20'> {'<td>81</td>'} </span> <br></br>
                            <span className='bold tab20'> {'<td>79</td>'} </span> <br></br>
                            <span className='bold tab20'> {'<td>85</td>'} </span> <br></br>
                            <span className='bold tab5'> {'</tr>'} </span> <br></br>
                            <span className='bold tab5'> {'</thead>'} </span> <br></br>
                            <span className='bold'> {'<table>'} </span> <br></br>
                            <br></br>
                            <Badge pill variant='primary'>{'<thead>'} - Table Header</Badge>
                                <span className='tab5'>- This represents the top row of the table</span>
                            <br></br>
                            <br></br>
                            <Badge pill variant='warning'>{'<tr>'} - Table Row</Badge>
                                <span className='tab5'>- This represents each row of data</span>
                            <br></br>
                            <br></br>
                            <Badge pill variant='success'>{'<th>'} - Table Heading</Badge>
                                <span className='tab5'>- This represents the print of column header</span>
                            <br></br>
                            <br></br>
                            <Badge pill variant='secondary'>{'<td>'} - Table Data</Badge>
                                <span className='tab5'>- This represents the data inside the tables</span>
                    </Card.Text>

                    <Accordion style={{fontSize:'15px'}}>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{fontSize:'15px'}}>
                                        <span className='accordian center'>Click Here to see the Table</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" style={{fontSize:'12px'}}>
                                    <Card.Body>

                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th className='green'>Weather App</th>
                                                <th scope="col">Saturday</th>
                                                <th scope="col">Sunday</th>
                                                <th scope="col">Monday</th>
                                                <th scope="col">Tuesday</th>
                                            </tr>
                                            <tr>
                                                <th scope="row">Temperature</th>
                                                    <td>73</td>
                                                    <td>81</td>
                                                    <td>79</td>
                                                    <td>85</td>
                                            </tr>
                                        </thead>
                                    </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                    </Accordion>

                </Card.Body>

            </Card>
            
        </div>
    )
}


