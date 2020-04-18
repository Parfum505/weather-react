import React from 'react';
import { Link, useParams } from "react-router-dom";
import City from "../City";
import {dateFormate, timeFormate} from "../../helpFunctions/convertations";

function Details(props) {
    const { id } = useParams();
    let data;
    if (props.forecast) {
        data = props.forecast;
    } else {
        data = JSON.parse(localStorage.getItem("forecast"));
    }
    const dayForcast = data.list[id],
        weather = dayForcast.weather[0];
    return (
        <div className="details-container">
            <City city={data.city.name} country={data.city.country} />
            <div className="row justify-content-center">
                <div className="details col-12 col-sm-8 col-md-6">
                    <div className="date text-center">{`${timeFormate(dayForcast.dt)} ${dateFormate(dayForcast.dt)}`}</div>
                    <div className="weather d-flex justify-content-around align-items-center">
                        <div className="icon">
                            <img className="img" alt="icon"
                                 src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
                        </div>
                        <div className="temp">{Math.round(dayForcast.temp.day)}&deg;C</div>
                        <div className="temp-feels">
                            <div>Feels like: {Math.round(dayForcast.feels_like.day)}&deg;C</div>
                            <div>Pressure: {dayForcast.pressure}hPa</div>
                            <div>Humidity: {dayForcast.humidity}%</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">Min. temp</div>
                        <div className="col">Max. temp</div>
                        <div className="col">Sunrise</div>
                        <div className="col">Sunset</div>
                    </div>
                    <div className="row">
                        <div className="col">{Math.round(dayForcast.temp.min)}&deg;C</div>
                        <div className="col">{Math.round(dayForcast.temp.max)}&deg;C</div>
                        <div className="col">{timeFormate(dayForcast.sunrise)}</div>
                        <div className="col">{timeFormate(dayForcast.sunset)}</div>
                    </div>
                    <Link to="/">&laquo; Back to results</Link>
                </div>
            </div>
        </div>
    );
}

export default Details;