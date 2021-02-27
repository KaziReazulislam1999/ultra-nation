import React from "react";

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const flagStyle = {
    height: "80px",
    width: "100px",
  };
  const countryStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "20px",
  };
  const handleAddCounty = props.handleAddCounty;

  return (
    <div style={countryStyle}>
      <h4>This Is a {name}</h4>
      <img style={flagStyle} src={flag} alt='' />
      <p>Country Population: {population}</p>
      <p>
        <small>Region : {region}</small>
      </p>
      <button onClick={() => handleAddCounty(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
