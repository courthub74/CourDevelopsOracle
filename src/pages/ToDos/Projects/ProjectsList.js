import React, {useState} from 'react';
import ProjectsForm from './ProjectsForm';

export const ProjectsList = () => {
    const [input, setInput] = useState([]);
    return (
        <div className='projects-form'>
            <h1>Add Project</h1>
            <ProjectsForm />
            {/* <input type="text" placeholder="Add a Project" value={input} name='text' className='projects-input' />
            <button className="projects-button">
                Add Project
            </button> */}
        </div>
    )
}


