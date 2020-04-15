import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import Results from "./components/Results";
import LimitDays from "./components/LimitDays";
import City from "./components/City";

const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0&q=';

function App() {
    const initForcast = {errorMsg: '', limitDays: 3, city:'',country: '', list: []};
    const [forecast, setForecast] = useState(initForcast);

    useEffect(() => {
        search('Krakow');
    }, []);

    function changeLimits(limit) {
        setForecast({...forecast, limitDays: +limit});
    }
    function search(city) {
        fetch(`${baseUrl}${city}`)
            .then((response) => response.json())
            .then((result) => {
                if (result.cod === "200") {
                    const city = result.city.name,
                        country = result.city.country,
                        newList = result.list.map((item) => {
                            let weather = item.weather[0];
                            return ({date: item.dt,temp: item.temp.day, icon: weather.icon, description: weather.description });
                        });
                    setForecast({...forecast, errorMsg: '', city, country, list: [...newList]});
                } else {
                    setForecast({...initForcast, errorMsg: result.message});
                }
            })
            .catch((error) => {
                setForecast({...initForcast, errorMsg: error.message});
        });
    }
  return (
    <div className="App">
        <div className="container position-relative">
            <h1 className="h3 title text-center pt-4 pb-4">Weather Forcast</h1>
            <Form search={search}/>
            <City city={forecast.city} country={forecast.country}/>
            { forecast.city ? <LimitDays limits={forecast.limitDays} changeLimits={changeLimits}/> : <></>}
            <Results forecast={forecast}/>
        </div>
    </div>
  );
}

export default App;
