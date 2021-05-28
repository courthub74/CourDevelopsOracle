import React, {useState} from 'react';
import ProjectsForm from './ProjectsForm';


export const ProjectsList = () => {
    const [input, setInput] = useState([]);

    const addProject = project => {
        if(!project.text || /^\s*$/.test(project.text)) {
            return 
        }

        const newProjects = [project, ...input]

        setInput(newProjects)
        console.log(...input);
    }

    


    return (
        <div className='projects-form'>
            <h1>Add Project</h1>
            <ProjectsForm onSubmit={addProject}/>
            {/* <input type="text" placeholder="Add a Project" value={input} name='text' className='projects-input' />
            <button className="projects-button">
                Add Project
            </button> */}
        </div>
    )
};


// function ProjectsList() {
//     const [input, setInput] = useState([]);
//     return (
//         <div className='projects-form'>
//             <h1>Add Project</h1>
//             <ProjectsForm />
//             <input type="text" placeholder="Add a Project" value={input} name='text' className='projects-input' />
//                <button className="projects-button">
//                     Add Project
//                </button>
//         </div>
//     )
// }

// export default ProjectsList;


