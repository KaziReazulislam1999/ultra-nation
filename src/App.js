import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Country from "./components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        const names = data.map((country) => country.name);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddCounty = (country) => {
    console.log("Added Country", country);
  };
  return (
    <div className='App'>
      <h1>Country Loaded : {countries.length}</h1>
      <h4>Country Added : </h4>

      {countries.map((country) => (
        <Country
          country={country}
          handleAddCounty={handleAddCounty}
          key={country.alpha3Code}
        ></Country>
      ))}

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
