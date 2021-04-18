import React from 'react'
import { Card } from 'react-bootstrap'
import * as DiIcons from 'react-icons/di'
import './git.css'

export const GITignore = () => {
    return (
        <div className='gitignore'>

            <Card>

                <Card.Header><h1>Creating the <span className='bold'>.gitignore</span> file<DiIcons.DiGit/></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty'>

                        <span>First you make a .gitignore file in your main folder</span> <br></br>
                        <span className='texty4'>NOTE: the . in front of the name is what hides the file</span> <br></br>
                        <hr></hr>
                        <span>Then type in the actuall files you want ignored</span> <br></br>
                        <hr></hr>
                        <span>Here are some examples:</span> <br></br>
                        <span className='bold tab5'>.env</span> <br></br>
                        <span className='texty4'>this is a file in Django where you supply the SECRET_KEY</span> <br></br>
                        <br></br>
                        <span className='bold tab5'>/[Ff]older Name/</span> <br></br>
                        <span className='texty4'>ABOVE ignores a directory(folder) entirely</span> <br></br>
                        <br></br>
                        <span className='bold tab5'>project.html</span> <br></br>
                        <span className='texty4'>You can directly type in a file like ABOVE and Git will ignore that</span> <br></br>
                        <br></br>
                        <span className='bold tab5'>*.js</span> <br></br>
                        <span className='texty4'>ABOVE is by extension where * means ALL of the JavaScript files</span> <br></br>
                        <hr></hr>
                        <span>Or you can just enter <span className='bold'>node_modules/</span> it depends on what you are doing</span> <br></br>
                       
                    </Card.Text>

                </Card.Body>

            </Card>
            
        </div>
    )
}

