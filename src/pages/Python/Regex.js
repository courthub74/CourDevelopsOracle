import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const Regex = () => {
    return (
        <div className='regex'>
            <Card>

                <Card.Header><h1>Regular Expression (Regex) <SiIcons.SiPython /></h1></Card.Header>
                    <Card.Body>

                        <Card.Text className='texty'>

                            <span>A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern</span><br></br>
                            <span>RegEx can be used to check if a string contains the specified search pattern.</span><br></br>
                            <br></br>
                            <span className='notes'>#Must import BELOW</span><br></br>
                            <span className='bold'>import re</span><br></br>
                            <span className='bold'>import sandbox</span><br></br>
                            <span className='bold'>import dynamic</span><br></br>
                            <span className='bold'>import alphanumerics</span><br></br>
                            <span className='bold'>import whitespace</span><br></br>
                            <span className='bold'>import wildcard</span><br></br>
                            <span className='bold'>import brackets</span><br></br>
                            <span className='bold'>import braces</span><br></br>
                            <span className='bold'>import zeroormore</span><br></br>
                            <br></br>
                            <span className='bold'>text = "Hello, this is some text. Hello"</span><br></br>
                            <br></br>
                            <span className='bold'>pattern = "Hello"</span><br></br>
                            <br></br>
                            <span className='bold'>regex = re.compile(pattern)</span><br></br>
                            <br></br>
                            <span className='bold'>match = regex.search(text)</span><br></br>
                            <span className='notes'>#'search' method only finds the first match</span><br></br>
                            <span className='bold'>print(match)</span><br></br>
                            <span className='bold'>print(match.group())</span><br></br>
                            <span className='bold'>print(match.start())</span><br></br>
                            <span className='bold'>print(match.end())</span><br></br>
                            <span className='bold'>print(match.span())</span><br></br>
                            <span className='bold'>all_matches = regex.findall(text)</span><br></br>
                            <span className='bold'>print(all_matches)</span><br></br>

                        </Card.Text>

                    </Card.Body>
                
            </Card>
            
        </div>
    )
}

