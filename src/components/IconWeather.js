import React from "react";

function IconWeather(props) {
    return (
        <div className={props.addClass? `icon ${props.addClass}` : `icon`}>
            <img className="img" alt="icon"
                 src={`http://openweathermap.org/img/w/${props.icon}.png`} />
        </div>
    );
}
export default IconWeather;