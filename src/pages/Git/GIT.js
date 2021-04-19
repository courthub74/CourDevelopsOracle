import React from 'react'
import { Card, Button } from 'react-bootstrap'
import * as DiIcons from 'react-icons/di'
import './git.css'

export const GIT = () => {
    return (
        <div className='gitgit'>

            <Card>

                <Card.Header><h1>Git <DiIcons.DiGit/></h1></Card.Header>

                    <Card.Body>

                        <Card.Text>
                            Git is a distributed version-control system for 
                            tracking changes in source code during software <br></br>
                            development. It is designed for coordinating work <br></br>
                            among programmers, but it can be used to track <br></br>
                            changes in any set of files. 
                        </Card.Text>
                        <Button variant='light'><a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fgit-icon-logo.png&f=1&nofb=1" alt="html"></img></a></Button>
                    </Card.Body>
            </Card>

            
        </div>
    )
}

