import React from 'react'
import ProjectsEntry from './ProjectsEntry';
import MyProjects from './myProjects';

function CreateEntry(projects){
    return <div>
    <ProjectsEntry 
        key = {projects.id}
        name = {projects.name}
        url = {projects.url}
        logo = {projects.logo}
        description = {projects.description}
    />
    </div>
}

const Projects = () => {
    return (
        <div className="py-14" id="projects">
            <h1 className="heading mb-4">Projects</h1>
            <div className="flex flex-wrap justify-center space-x-10 sm:space-x-0 sm:space-y-3 md:space-x-0 md:space-y-5  mx-1">
                {MyProjects.map(CreateEntry)}
            </div>
        </div>
    )
}

export default Projects