import React from 'react';

function Results({forecast}) {
    const weather = forecast.list.map((item,i) => {
        return (
            <li key={i} className="col-10 col-sm-6 col-md-4 col-lg-3">
                <div className="result">
                    <div className="date">{item.date}</div>
                    <div className="weather">
                        <div className="icon">
                            <img className="img" alt="icon"
                                 src={`http://openweathermap.org/img/w/${item.icon}.png`} />
                        </div>
                        <div className="temp">{item.temp}</div>
                    </div>
                    <div className="description">{item.description}</div>
                </div>
            </li>
        );
    });
    if (weather.length) {
        return (
            <>
                <div className="row">
                    <div className="city">{forecast.city}, {forecast.country}</div>
                </div>
                <ul className="row results">{weather}</ul>
            </>
        );
    } else {
        return (
            <div className="row">
                <div className="error">City not found</div>
            </div>
        );
    }
}

export default Results;