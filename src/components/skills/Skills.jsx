import React from 'react';
import Entry from "./SkillsEntry";
import MySkills from "./mySkills";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Fade} from 'react-reveal';

function CreateEntry(skills) {
    return (
        <Entry 
            key={skills.id}
            image={skills.image}
            rating={skills.rating}
        />
    );
}

const Skills = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the speed as needed
        pauseOnHover: true,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToScroll: 4,
        responsive: [
        {
        breakpoint: 768, // Adjust the breakpoint according to your design
        settings: {
            slidesToShow: 2,
            slidesToScroll:2
        }
        },
        {
        breakpoint: 1024, // Adjust the breakpoint according to your design
        settings: {
            slidesToShow: 3,
            slidesToScroll:3
        }
        },
        {
        breakpoint: 1440, // Adjust the breakpoint according to your design
        settings: {
            slidesToShow: 4
        }
        }
    ]
    };
    return (
        <Fade duration={1500}>
        <div className="skills-div rounded-[100px] mx-5" id="skills">
            <h1 className="heading">Skills</h1>
            <p className="tagline">Skills are the keys to unlock doors of opportunity. They empower individuals to transform challenges into achievements, paving the way for innovation and growth.</p>
            <div className="flex justify-center items-center">
                <div className="w-full md:w-3/4 lg:w-2/3 xl:w-11/12">
                    <Slider {...settings}>
                        {MySkills.map(CreateEntry)}
                    </Slider>
                </div>
            </div>
        </div>
        </Fade>
    );
}

export default Skills;
