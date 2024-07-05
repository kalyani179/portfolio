import React from 'react';
import girlImage from "../../../assets/images/home/hero-image.png"

const Body = () => {
    return (<>
        <div className="flex m-20 space-x-28">
            <img className="w-96 h-96 bg-black/50 rounded-full" src={girlImage} alt="girl-image" />
            <div className="mt-20 space-y-1">
                <h1 className="text-[50px] font-playfairdisplay italic font-bold">Hey, I'm Kalyani Dantuluri.</h1>
                <p className="font-gelasio text-2xl text-center w-[85%]">Welcome to my Portfolio! Here is where you can explore more about me,my skills,my projects,my experiences.
                Feel free to reach out if you like my work.</p>
            </div>
            <div className="flex flex-col space-y-2 absolute top-64 right-5">
                <i class="fi fi-brands-linkedin social-media-icon"></i>
                <i class="fi fi-brands-github social-media-icon"></i>
                <i class="fi fi-brands-instagram social-media-icon"></i>
            </div>
        </div>
        </>
    )
}

export default Body