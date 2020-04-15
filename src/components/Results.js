import React from 'react';

function Results({forecast}) {
    function dateFormate(date) {
        const d = new Date(date*1000),
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[d.getMonth()]} ${d.getDate()}`
    }
    const weather = forecast.list
                    .slice(0, forecast.limitDays)
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
    if (forecast.errorMsg) {
        const errorMsg = forecast.errorMsg.trim();
        const errorText = `${errorMsg.charAt(0).toUpperCase()}${errorMsg.slice(1)}`;
        return (
            <div className="error text-center">{errorText}</div>
        );
    }
    return (
        <ul className="row results list-unstyled justify-content-center">{weather}</ul>
    );
}

export default Results;