import React from 'react';
import LimitDays from "./LimitDays";
import City from "./City";

function Results(props) {
    function dateFormate(date) {
        const d = new Date(date*1000),
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[d.getMonth()]} ${d.getDate()}`
    }
    const weather = props.forecast.list
                    .slice(0, props.forecast.limitDays)
                    .map((item,i) => {
                        return (
                            <li key={i} className="col-10 col-sm-6 col-md-4 col-lg-3">
                                <div className="result">
                                    <div className="date text-center">{dateFormate(item.date)}</div>
                                    <div className="weather d-flex justify-content-around">
                                        <div className="icon">
                                            <img className="img" alt="icon"
                                                 src={`http://openweathermap.org/img/w/${item.icon}.png`} />
                                        </div>
                                        <div className="temp">{Math.round(item.temp)}</div>
                                    </div>
                                    <div className="description text-center">{item.description}</div>
                                </div>
                            </li>
                        );
                    });
    if (props.errorMsg) {
        const errorMsg = props.errorMsg.trim();
        const errorText = `${errorMsg.charAt(0).toUpperCase()}${errorMsg.slice(1)}`;
        return (
            <div className="error text-center">{errorText}</div>
        );
    }
    if (weather && weather.length) {
        return (
            <>
                <City city={props.city} country={props.forecast.country}/>
                <LimitDays limits={props.forecast.limitDays} changeLimits={props.changeLimits}/>
                <ul className="row results list-unstyled justify-content-center">{weather}</ul>
            </>
            );
    }
    return (<></>);
}

export default Results;