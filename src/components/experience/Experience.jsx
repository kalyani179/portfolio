import React, { useState } from 'react'
import ExperienceEntry from './ExperienceEntry';
import myExperience from './myExperience';
import { Fade, LightSpeed, Zoom } from 'react-reveal';

const CreateEntry = (experience) => {
    return (
        <Fade {...(experience.id % 2 === 0 ? { right: true } : { left: true })}>
            <ExperienceEntry 
                key={experience.id}
                name={experience.name}
                type={experience.type}
                role={experience.role}
                period = {experience.period}
                description={experience.description}
            />
        </Fade>
    );
}

const Experience = () => {
    const [activeTab,setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }
    return (
        <Zoom>
        <div id="experience" className="flex flex-col">
            <h1 className="heading my-5">Experience</h1>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 border border-b-0 border-r-0 border-white/50">
                <button className={`tab sm:px-10 ${activeTab===1 ? "active-tab":""}`} onClick={()=>handleTabClick(1)}>Internships</button>
                <button disabled className={`tab ${activeTab===2 ? "active-tab" : ""}`} onClick={()=>handleTabClick(2)}>Jobs</button>
            </div>
        </div>
            <div>
                    {activeTab === 1 &&
                        <div className="flex sm:flex-wrap justify-center mx-32 my-10 sm:mx-3 md:mx-2">
                            {myExperience.map(CreateEntry)}
                        </div>
                    }
                </div>
            
        </div>
        </Zoom>
    )
}

export default Experience