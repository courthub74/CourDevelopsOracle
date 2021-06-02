import React, { useState, useEffect, useRef } from 'react';
import './projects.css';

function ProjectsForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const projectRef = useRef(null);

    useEffect(() => {
        projectRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='project-form' onSubmit={handleSubmit}>
            {/* So To add a different form when editing, you pass props.edit and then add a terenary operator for the new 'update' input form */}
            {props.edit ? ( 
            <>
            <input 
                type='text' 
                placeholder='Update Project' 
                value={input} 
                name='text' 
                className='project-input edit' 
                onChange={handleChange}
                ref={projectRef}
            />

            <button onClick={handleSubmit} className='project-button edit'>Update Project</button>
            </>
            ) :
            (
            <>
            <input
                type='text' 
                placeholder='Add a Project' 
                value={input} 
                name='text' 
                className='project-input' 
                onChange={handleChange}
                ref={projectRef}
                />
            <button onClick={handleSubmit} className='project-button'>Add Project</button>
            </>
            )
            }

        </form>
    );
}

export default ProjectsForm;
