import React from 'react'

const ExperienceEntry = (props) => {
    return (
        
        <div className="bg-white/10 flex flex-col border border-white/50 m-5 space-y-4 justify-center p-5">
            <h1 className="text-2xl text-center">{props.name}</h1>
            <p className="text-xl text-center">{props.role}</p>
            <p className="text-lg text-center active-tab">{props.period}</p>
            <p className="text-lg text-center">{props.description}</p>
        </div>
    )
}

export default ExperienceEntry