import React, { useState } from 'react'

const About = () => {
    const [activeTab,setActiveTab] = useState(2);
    const handleTabClick = (tabNumber) =>{
        setActiveTab(tabNumber);
    }
    return (
        <div className="block mx-auto">
            <div>
                <h1 className="heading">About Me</h1>
                <p className="tagline">I am a passionate and skilled software developer specializing in the MERN stack, dedicated to building innovative and user-friendly applications.</p>
            </div>
            <div className="flex justify-center items-center my-10 w-screen">
                <div className="border border-white/50 rounded-3xl">
                    <button className={`tab ${activeTab===1 ? "active-tab rounded-l-3xl":""}`} onClick={()=>handleTabClick(1)}>Education</button>
                    <button className={`tab ${activeTab===2 ? "active-tab" : ""}`} onClick={()=>handleTabClick(2)}>Favourites</button>
                    <button className={`tab border-r-0 ${activeTab===3 ? "active-tab rounded-r-3xl" : ""}`} onClick={()=>handleTabClick(3)}>Achievements</button>
        
                <div className="p-7 py-10">
                {activeTab===1 && 
                <div className=''>
                <ul className="text-xl space-y-5">
                        <li>I completed my schooling at Dr.Besant School | 2006-2019 - 10/10</li>
                        <li>I completed my Inter at Srichaitanya college | 2019-2021 - 99%</li>
                        <li>I am a computer science student, graduating at MVGR | 2021-2025 - 9.33 CGPA</li>
                </ul>
                </div>}
                {activeTab === 2 && <div>
                    <ul className="text-xl space-y-5">
                        <li>I love playing the piano and find it relaxing and enjoyable.</li>
                        <li>Dance and music are my passions, they bring me happiness and fulfillment.</li>
                        <li>Typing is a skill I take pride in, and I enjoy improving my speed and accuracy.</li>
                        <li>I find creating beautiful and functional websites both rewarding and enjoyable.</li>
                        {/* <li>I enjoy cooking and experimenting with new recipes.</li> */}
                        <li>I enjoy an active lifestyle, focusing on fitness and well-being through exercise and healthy eating habits.</li>
                        {/* <li>Making websites that help people is a passion of mine, combining creativity with problem-solving.</li> */}
                    </ul>

                </div>}
                {activeTab === 3 && <div>
                        <p>content for tab3</p>
                </div>}
            </div>
                </div>
            </div>
        </div>
    )
}

export default About