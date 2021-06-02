import React, {useState} from 'react'
import ProjectsForm from './ProjectsForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import './projects.css';

function ProjectsTodo({projects, completeProject, removeProject, updateProject}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateProject(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ProjectsForm edit={edit} onSubmit={submitUpdate} />;
    }



    return projects.map((project, index) => (
        <div 
            className={project.isComplete ? 'project-row complete' : 'project-row' }
            key={index}
        >
            <div key={project.id} onClick={() => completeProject(project.id)}>
                {project.text}
            </div> 

            {/* Icons at end of the Bar/Row */}
            <div className="icons">

                <RiCloseCircleLine 
                    onClick={() => removeProject(project.id)}
                    className='delete-icon' />
                <TiEdit onClick={() => setEdit({ id: project.id, value: project.text})}
                className='edit-icon'/>

            </div>
        </div>
    )
        
    )
}

export default ProjectsTodo;
