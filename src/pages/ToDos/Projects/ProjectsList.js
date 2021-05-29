import React, {useState} from 'react';
import ProjectsForm from './ProjectsForm';
import ProjectsTodo from './ProjectsTodo';


export const ProjectsList = () => {
    const [projects, setProjects] = useState([]);

    const addProject = project => {
        if(!project.text || /^\s*$/.test(project.text)) {
            return 
        }

        const newProjects = [project, ...projects]

        setProjects(newProjects)
        // console.log(...projects);
    };

    const updateProject = (projectId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setProjects(prev => prev.map(item => (item.id === projectId ? newValue : item)));
    };

    const removeProject = id => {
        const removeArr = [...projects].filter(project => project.id !== id)

        setProjects(removeArr);
    };

    const completeProject = id => {
        let updatedProject = projects.map(project => {
            if (project.id === id) {
                project.isComplete = !project.isComplete
            }
            return project;
        });
        setProjects(updatedProject);
    };

    


    return (
        <div className='projects-form'>
            <h1>Add Project</h1>
            <ProjectsForm onSubmit={addProject}/>
            <ProjectsTodo projects={projects} completeProject={completeProject} removeProject={removeProject} updateProject={updateProject}
            />
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


