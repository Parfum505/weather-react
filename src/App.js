import React from 'react';
import './App.css';
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?cnt=3&units=metric&APPID=0867a13b59c398d1edd05d49f440e4f0&q=';
  return (
    <div className="App">
      <Form />
      <Results />
    </div>
  );
}

export default App;
