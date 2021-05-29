import React, {useState} from 'react'
import ProjectsForm from './ProjectsForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function ProjectsTodo({projects, completeProject, removeProject}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

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

export default ProjectsTodo
