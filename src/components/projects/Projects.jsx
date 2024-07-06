import React from 'react'
import backgroundImage1 from '../../assets/images/home/background1.png';
import backgroundImage2 from '../../assets/images/home/background2.png';
const Projects = () => {
    return (
        <div className="bg-cover bg-center bg-repeat" style={{ backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})` }} >
            <h1 className="heading">Projects</h1>
        </div>
    )
}

export default Projects