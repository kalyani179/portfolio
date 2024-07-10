import React from 'react'
import {Zoom } from 'react-reveal'

const ProjectsEntry = (props) => {
    return (
        <div className="hover-effect">
        <Zoom duration={2000}>
        <div className="border border-white/50 p-5 my-3 w-96 rounded-2xl bg-white/10">
            <img src={props.logo} className="w-96 h-40 rounded-2xl" alt="" />
            <p className="text-xl text-center my-4">{props.name}</p>
            <div className="flex flex-col">
                <p className="text-center">{props.description}</p>
            </div>
            <div className="flex justify-center items-center mt-5">
                <a href={props.url} target="_blank" rel="noreferrer"><button className="project-buttons p-2 rounded-full px-4 hover:bg-opacity-70">View Website</button></a>
            </div>
        </div>
        </Zoom>
        </div>
    )
}

export default ProjectsEntry