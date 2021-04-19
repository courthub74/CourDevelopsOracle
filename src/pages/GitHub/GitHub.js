import React from 'react'
import { Card, Button } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import './github.css'

export const GitHub = () => {
    return (
        <div className='github'>

            <Card>

                <Card.Header><h1>GitHub <AiIcons.AiFillGithub/></h1></Card.Header>

                <Card.Body>

                    <Card.Text>

                        GitHub, Inc. is a United States-based global company <br></br>
                        that provides hosting for software development and <br></br>
                        version control using Git. It provides access control <br></br>
                        and several collaboration features such as bug tracking, <br></br>
                        feature requests, task management, and wikis for every project. <br></br>
                        <br></br>
                        <Button variant='dark'><a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-9-xxl.png&f=1&nofb=1" alt="GitHub"></img></a></Button>

                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

