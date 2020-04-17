import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import ErrorMsg from "./components/ErrorMsg";
import Results from "./components/Results";

const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0&q=';

function App() {
    const [forecast, setForecast] = useState({});
    const [errorMsg, setError] = useState('');
    const [load, setLoad] = useState(false);
    const [city, setCity] = useState('');
    const [limit, setLimit] = useState(3);
    const [daytemp, setDaytemp] = useState(0);

    useEffect(() => {
        setCity('Krakow');
    }, []);

    useEffect(() => {
        if (!city) return;
        setLoad(false);
        fetch(`${baseUrl}${city}`)
            .then((response) => response.json())
            .then((result) => {
                if (result.cod === "200") {
                    setForecast({...result});
                    setError('');
                    const day = result.list[0];
                    setDaytemp(day.temp.day);
                } else {
                    setError(result.message);
                }
                setLoad(true);
            })
            .catch((error) => {
                setLoad(true);
                setError(error.message);
            });
    }, [city]);

    function newCity(data) {
        setCity(data);
    }
    function changeLimit(newLimit) {
        setLimit(newLimit);
    }

  return (
    <div className={daytemp > 20 ? 'App summer' : 'App'}>
        <div className="container position-relative">
            <h1 className="h3 title text-center pt-4 pb-4">Weather Forcast</h1>
            <Form newCity={newCity} />
            { errorMsg ? <ErrorMsg errorMsg={errorMsg}/> : (
                load ? <Results forecast={forecast}
                                limit={limit}
                                changeLimit={changeLimit}/> :
                    <div className="text-center">Loading...</div>)
            }
        </div>
    </div>
  );
}

export default App;
