import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";

const baseUrl =
  "https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0&q=";

function App() {
  const [forecast, setForecast] = useState({});
  const [appState, setAppState] = useState({ errorMsg: "", load: false });
  const [city, setCity] = useState("");
  const [daytemp, setDaytemp] = useState(0);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const limit = JSON.parse(localStorage.getItem("limit"));
    if (limit) setLimit(limit);
    const savedForcast = JSON.parse(localStorage.getItem("forecast"));
    const cityName =
      savedForcast && savedForcast.city.name
        ? savedForcast.city.name
        : "Krakow";
    setCity(cityName);
  }, []);

  useEffect(() => {
    if (!city) return;
    setAppState({ errorMsg: "", load: false });
    fetch(`${baseUrl}${city}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.cod === "200") {
          setForecast({ ...result });
          setAppState({ errorMsg: "", load: true });
          const day = result.list[0];
          setDaytemp(day.temp.day);
          localStorage.setItem("forecast", JSON.stringify(result));
        } else {
          setAppState({ errorMsg: result.message, load: true });
        }
      })
      .catch((error) => {
        setAppState({ errorMsg: error.message, load: true });
      });
  }, [city]);

  function newCity(data) {
    setCity(data);
  }
  function changeLimit(newLimit) {
    setLimit(newLimit);
    localStorage.setItem("limit", newLimit);
  }
  return (
    <div className={daytemp > 20 ? "App summer" : "App"}>
      <div className="container position-relative pb-4 pt-4">
        <h1 className="h3 title text-center pb-4">Weather Forcast</h1>
        <Router basename="/weather-react">
          <Switch>
            <Route path="/details/:id">
              <Details forecast={forecast} />
            </Route>
            <Route path="/" exact>
              <Home
                appState={appState}
                forecast={forecast}
                newCity={newCity}
                limit={limit}
                changeLimit={changeLimit}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
