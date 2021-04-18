import React from 'react'
import { Card } from 'react-bootstrap'
import * as DiIcons from 'react-icons/di'
import './git.css'

export const GITdeleterepo = () => {
    return (
        <div className='gitdeletrepo'>

            <Card>

                <Card.Header><h1>Delete <DiIcons.DiGit/> Repo</h1></Card.Header>

                    <Card.Body>

                        <Card.Text>
                            <span>In the Directory</span> <br></br>
                            <span>Delete all files except for <span className='bold'>.git</span></span> <br></br>
                            <br></br>
                            <span className='bold'>git add . -A</span> <br></br>
                            <span className='bold'>git commit -m</span> <br></br>
                            <span className='bold'>"deleted entire project"</span> <br></br>
                            <span className='bold'>git push</span> <br></br>
                        </Card.Text>

                    </Card.Body>

            </Card>
            
        </div>
    )
}

