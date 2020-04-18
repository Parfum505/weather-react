import React from 'react';
import LimitDays from "./LimitDays";
import City from "./City";
import {Link} from "react-router-dom";
import {dateFormate} from "../helpFunctions/convertations";

function Results(props) {
    const weather = props.forecast.list
                    .slice(0, props.limit)
                    .map((item,i) => {
                    const temp_weather = item.weather[0];
                        return (
                            <li key={i} className="col-10 col-sm-6 col-md-4 col-lg-3">
                                <Link className="result d-block text-decoration-none" to={`/details/${i}`}>
                                    <div className="date text-center">{dateFormate(item.dt)}</div>
                                    <div className="weather d-flex justify-content-around align-items-center">
                                        <div className="icon">
                                            <img className="img" alt="icon"
                                                 src={`http://openweathermap.org/img/w/${temp_weather.icon}.png`} />
                                        </div>
                                        <div className="temp">{Math.round(item.temp.day)}&deg;C</div>
                                    </div>
                                    <div className="description text-center">{temp_weather.description}</div>
                                    <div className="show-details text-center mt-2">Show details &raquo;</div>
                                </Link>
                            </li>
                        );
                    });
    if (weather && weather.length) {
        return (
            <>
                <City city={props.forecast.city.name} country={props.forecast.city.country}/>
                <LimitDays limits={props.limit} changeLimit={props.changeLimit}/>
                <ul className="row results list-unstyled justify-content-center">{weather}</ul>
            </>
            );
    }
    return (<></>);
}

export default Results;