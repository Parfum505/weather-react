import React from "react";
import LimitDays from "./LimitDays";
import City from "./City";
import DateTitle from "./DateTitle";
import { Link } from "react-router-dom";
import { dateFormate } from "../helpFunctions/convertations";
import IconWeather from "./IconWeather";

function Results(props) {
  const weather = props.forecast.list.slice(0, props.limit).map((item, i) => {
    const temp_weather = item.weather[0];
    return (
      <li key={i} className="col-10 col-sm-6 col-md-4 col-lg-3">
        <Link
          className="result d-block text-decoration-none"
          to={`/details/${i}`}
        >
          <DateTitle date={dateFormate(item.dt)} />
          <div className="weather d-flex justify-content-around align-items-center">
            <IconWeather icon={temp_weather.icon} />
            <div className="temp">{Math.round(item.temp.day)}&deg;C</div>
          </div>
          <div className="description text-center">
            {temp_weather.description}
          </div>
          <div className="show-details text-center mt-2">
            Show details &raquo;
          </div>
        </Link>
      </li>
    );
  });
  if (weather && weather.length) {
    return (
      <>
        <City
          city={props.forecast.city.name}
          country={props.forecast.city.country}
        />
        <LimitDays limits={props.limit} changeLimit={props.changeLimit} />
        <ul className="row results list-unstyled justify-content-center m-0">
          {weather}
        </ul>
      </>
    );
  }
  return <></>;
}

export default Results;
