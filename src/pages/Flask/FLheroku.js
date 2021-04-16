import React from 'react'

export const FLheroku = () => {
    return (
        <div className='flheroku'>

            <Card>
                <Card.Header><h1><SiIcons.SiFlask/> Flask Hero<SiIcons.SiHeroku />u Setup </h1></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Accordion>

                                {/* Initial Setup */}
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Flask app to Heroku
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='texty'>
                                                <span>in directory of your app code,</span> <br></br>
                                                <span className='bold'>pip install gunicorn</span> <br></br>
                                                <span>Make sure you're using pip</span> <br></br>
                                                <span>from your virtual environment</span> <br></br>
                                                <hr></hr>
                                                <span>in (project) install flask</span> <br></br>
                                                <span className='bold'>pip install flask</span> <br></br>
                                                <hr></hr>
                                                <span>Create a requirement.txt file</span> <br></br>
                                                <span>in the main app directory</span> <br></br>
                                                <span>where the main Python app </span> <br></br>
                                                <span>file is located</span> <br></br>
                                                <span>You can create that file by running</span> <br></br>
                                                <span className='bold'>pip freeze {'>'} requirements.txt</span> <br></br>
                                                <hr></hr>

                                                
                                                <span>create new file within (project)</span> <br></br>
                                                <span>called (new file)[save as]</span> <br></br>
                                                <hr></hr>
                                                <span>enter below in (new file):</span><br></br>
                                                <br></br>
                                                <span className='bold'>from flask import Flask</span> <br></br>
                                                <br></br>
                                                <span className='bold'>app = Flask(__main__)</span> <br></br>
                                                <span className='bold'>if __name__ == "__main__":</span> <br></br> 
                                                <span className='bold tab5'>app.run(debug=True)</span> <br></br>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>

                                </Accordion>
                        </Card.Text>
                    </Card.Body>
            </Card>
            
        </div>
    )
}
