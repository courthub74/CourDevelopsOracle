import React from 'react'
import { Card } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import './react.css'

export const REstartapp = () => {
    return (
        <div className='reactstart'>

            <Card>

                <Card.Header><h1>Start React App <FaIcons.FaReact/></h1></Card.Header>

                <Card.Body>
                    <Card.Text className='texty2'>

                        
                            <li>mkdir (app)</li>
                            <hr></hr>
                            <li>npx create-react-app (appname)</li>
                            <hr></hr>
                            <li>cd into (appname)</li>
                            <hr></hr>
                            <li>starts dev version</li>
                            <span className='blue tab15'>npm start</span>
                            <hr></hr>
                            <li>for production version:</li>
                            <span className='blue tab15'>npm run build</span>
                            <hr></hr>
                            <span className='bold'>You can also use 'YARN' in place of 'NPM'</span>
                            <hr></hr>
                            <li>open (appname) in editor</li>
                            <hr></hr>
                            <li>in 'src' folder mkdir called 'components'</li>
                            <hr></hr>
                            <li>make data files</li>
                            <hr></hr>
                            <li>create corresponding JS files and map data thru</li>
                        
                        
                    </Card.Text>
                </Card.Body>

            </Card>
            
        </div>
    )
}

