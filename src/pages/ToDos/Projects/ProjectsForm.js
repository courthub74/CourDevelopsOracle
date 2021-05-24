import React, { useState } from 'react'

function ProjectsForm(props) {
    const [input, setInput] = useState('');

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
        <form className='project-form'>
            <input 
                type='text' 
                placeholder='Add a Project' 
                value={input} 
                name='text' 
                className='project-input' />

            <button className='project-button'>
                Add a Project
            </button>

        </form>
    );
}

export default ProjectsForm;
