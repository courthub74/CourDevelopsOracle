import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di'
import './git.css'

export const GITpushheroku = () => {
    return (
        <div className='gitpushheroku'>

            <Card>

                <Card.Header><h1><DiIcons.DiGit/> Push Existing Repo to Hero<SiIcons.SiHeroku />u</h1></Card.Header>

                <Card.Body>

                    <Card.Text>

                        <span className='bold'>git add .</span> <br></br>
                        <span className='bold'>git commit -am "Commit Message"</span> <br></br>
                        <span className='bold'>git push heroku master</span> <br></br>

                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

