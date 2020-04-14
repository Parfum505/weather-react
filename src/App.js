import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Results from "./components/Results";

const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?cnt=9&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0&q=';

function App() {
    const initForcast = {city:'',country: '', list: []};
    const [forecast, setForecast] =useState(initForcast);
    
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
                    setForecast({city, country, list: [...newList]});
                } else {
                    setForecast({...initForcast});
                }
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
    <div className="App">
        <div className="container">
            <Form search={search}/>
            <Results forecast={forecast}/>
        </div>
    </div>
  );
}

export default App;
