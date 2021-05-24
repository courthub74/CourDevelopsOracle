import React, {useState} from 'react';


export const ClassesList = () => {
    const [input, setInput] = useState('');
    return (
        <div className='classes-form'>
            <input type="text" placeholder="Add a Class" value={input} name='text' className='classes-input' />
            <button className="classes-button">
                Add Class To Take
            </button>
        </div>
    )
}


