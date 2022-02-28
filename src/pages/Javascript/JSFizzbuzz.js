import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si';
import './javascript.css';

export const JSFizzbuzz = () => {
    return (
        <div className='jsfizzbuzz'>

            <Card>

                <Card.Header><h1 className='black'>FizzBuzz <SiIcons.SiJavascript/></h1></Card.Header>

                <Card.Body>

                    <Card.Text className='texty2'>

                        <p>One approach from the infamous interview question:</p>

                            <span className='bold'>var i = 0;</span> <br></br>
                            <span className='bold'>while (i {'<= '}99){'{'}</span> <br></br>
                            <span className='bold'>i++;</span> <br></br>
                            <br></br>
                            <span className='notes'>{'//document.write(i + ". {"< br/>"}");'}</span> <br></br>
                            <br></br>
                            <span className='bold'>if (i % 3 == 0 {'&&'} i % 5 == 0){'{'}</span> <br></br>
                            <span className='bold tab5'>document.write(i + ". FizzBuzz!{'< br/>'}");</span> <br></br>
                            <span className='bold'>{'}'} else if (i % 3 == 0){'{'}</span> <br></br>
                            <span className='bold tab5'>document.write(i + ". Buzz!{'< br/>'}");</span> <br></br>
                            <span className='bold'>{'}'} else if (i % 5 == 0){'{'}</span> <br></br>
                            <span className='bold tab5'>document.write(i + ". Buzz!{'< br/>'}");</span> <br></br>
                            <span className='bold'>{'}'} else {'{'}</span> <br></br>
                            <span className='bold tab5'>document.write(i + ". {'< br/>'}");</span> <br></br>
                            <span className='bold'>{'}'}</span><br></br>
                            <br></br>
                            <span className='notes'>{'//NOW try it with a FOR Loop'}</span> <br></br>
                            <span className='bold'>{'}'}</span> <br></br>
                            <span className='bold'>{'});'}</span> <br></br>

                    </Card.Text>

                </Card.Body>
            </Card>
            
        </div>
    )
}


