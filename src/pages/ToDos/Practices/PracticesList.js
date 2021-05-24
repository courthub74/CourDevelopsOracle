import React, {useState} from 'react';


export const PracticesList = () => {
    const [input, setInput] = useState('');
    return (
        <div className='practice-form'>
            <input type="text" placeholder="Add a Practice" value={input} name='text' className='practice-input' />
            <button className="practice-button">
                Add Practice
            </button>
        </div>
    )
}


