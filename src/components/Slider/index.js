import React from 'react';
import './style.css'
import './slider.png'

const Slider = (    )=>{
    return(
        <div className="SlidesContainer">
            <div className="LeftArrow arrowHover">
                <div className="arrow left">
                </div>
            </div>
            <div className="RightArrow arrowHover">
                <div className="arrow right">
                </div>
            </div>
            <div className="content">
                <span className="MySpan">Perfume Tips <br></br>Tricks</span>
                <button className="MyButton">shop now</button>
            </div>
        </div>
    );
};
export default Slider;