import React from 'react';
import girlImage from "../../../assets/images/home/hero-image.png"
import { Bounce, Fade, Rotate, Zoom } from 'react-reveal';

const Body = () => {
    return (<>
        <div className="flex sm:flex-col md:flex-col sm:center md:center m-20 sm:m-3 md:m-8 space-x-28 sm:space-y-10 sm:space-x-0 md:space-x-0 md:space-y-14">
            <Bounce>
                <img className="w-96 h-96 sm:w-72 sm:h-72 sm:center md:center md:w-80 md:h-80 bg-black/50 rounded-full" src={girlImage} alt="girl-image" />
            </Bounce>
            <div className="sm:center md:center sm:flex-col md:flex-col mt-20 space-y-1">
                <Zoom duration={1500}>
                <h1 className="text-[50px] sm:text-3xl md:text-3xl font-playfairdisplay italic font-bold md:w-full sm:w-full sm:text-center md:text-center">
                    Hey, I'm <span className="gradient-text">Kalyani </span> Dantuluri.
                </h1>
                </Zoom>
                <Zoom duration={1500}>
                    <p className="font-gelasio text-2xl text-center w-[85%] sm:w-full sm:text-base md:text-lg">Welcome to my Portfolio! Here is where you can explore more about me, my skills, my projects, my experiences.
                    Feel free to reach out if you like my work.</p>
                </Zoom>
            </div>
            <Fade right duration={3000}>
            <div className="flex flex-col space-y-2 absolute top-72 right-5 sm:hidden md:hidden">
                <Rotate duration={3000}>
                    <a target="_" href="https://www.linkedin.com/in/kalyani-dantuluri-5a253023b/"><i class="fi fi-brands-linkedin social-media-icon"></i></a> 
                </Rotate>
                <Rotate duration={3000}>
                    <a target="_" href="https://github.com/kalyani179"><i class="fi fi-brands-github social-media-icon"></i></a>
                </Rotate>
                <Rotate duration={3000}>
                    <a target="_" href="mailto:dantulurikalyani999@gmail.com"><i class="fi fi-sr-envelope social-media-icon"></i></a> 
                </Rotate>
            </div>
        </Fade>
            
        </div>
        </>
    )
}

export default Body