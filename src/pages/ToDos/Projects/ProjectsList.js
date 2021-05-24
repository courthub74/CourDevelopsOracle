import React, {useState} from 'react';


export const ProjectsList = () => {
    const [input, setInput] = useState('');
    return (
        <div className='projects-form'>
            <input type="text" placeholder="Add a Project" value={input} name='text' className='projects-input' />
            <button className="projects-button">
                Add Project
            </button>
        </div>
    )
}


