import React from "react";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
function Entry(props){
    return(
            <div className="skills-image-rating-div bg-white/70">
                <div className="skills-image-div">
                    <Flip duration={1000}>
                        <img className="skills-img" src={props.image} alt="skills" />
                    </Flip>
                </div>
                <Bounce clear duration={5000}>
                    <div className="skills-rating-div mt-1">
                        <p>{props.rating}</p>
                    </div>
                </Bounce>
            </div>
        )
}


export default Entry;