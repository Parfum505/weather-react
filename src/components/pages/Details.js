import React from 'react';
import { Link, useParams } from "react-router-dom";
import City from "../City";
import {dateFormate, timeFormate} from "../../helpFunctions/convertations";
import DateTitle from "../DateTitle";
import IconWeather from "../IconWeather";

function Details(props) {
    const { id } = useParams();
    let data;
    if (props.forecast.list) {
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
                <div className="details col-11 col-sm-10 col-md-8 col-lg-6">
                    <DateTitle date={dateFormate(dayForcast.dt)}>{timeFormate(dayForcast.dt)}</DateTitle>
                    <div className="weather row justify-content-around align-items-center text-center text-sm-left">
                        <IconWeather icon={weather.icon} addClass="col-6 col-sm-4"/>
                        <div className="temp col-6 col-sm-4">
                            <div className="temp-val">{Math.round(dayForcast.temp.day)}&deg;C</div>
                            <div>{weather.description}</div>
                        </div>
                        <div className="temp-feels col col-sm-4">
                            <div className="row justify-content-center justify-content-sm-start">
                                <div className="col-auto col-sm-12 mb-2 mb-sm-0">Feels like: {Math.round(dayForcast.feels_like.day)}&deg;C</div>
                                <div className="col-auto col-sm-12 mb-2 mb-sm-0">Pressure: {dayForcast.pressure} hPa</div>
                                <div className="col-auto col-sm-12 mb-2 mb-sm-0">Humidity: {dayForcast.humidity} %</div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-3">
                        <div className="col-6 col-sm-3 mb-2">
                            <div>Min. temp</div>
                            <div>{Math.round(dayForcast.temp.min)}&deg;C</div>
                        </div>
                        <div className="col-6 col-sm-3 mb-2">
                            <div>Max. temp</div>
                            <div>{Math.round(dayForcast.temp.max)}&deg;C</div>
                        </div>
                        <div className="col-6 col-sm-3 mb-2">
                            <div>Sunrise</div>
                            <div>{timeFormate(dayForcast.sunrise)}</div>
                        </div>
                        <div className="col-6 col-sm-3 mb-2">
                            <div>Sunset</div>
                            <div>{timeFormate(dayForcast.sunset)}</div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <Link className="col-auto" to="/">&laquo; Back to results</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;