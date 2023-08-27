import { useEffect, useState } from "react";
import countriesService from "./services/countriesAPI";
import Countries from "./Countries";
import CountryFilter from "./CountryFilter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");

  const handleCountryInput = (event) => {
    setCountryInput(event.target.value);
  };

  const filteredCountries =
    countryInput.length > 0
      ? countries.filter((country) =>
          country.name.common.toLowerCase().match(countryInput.toLowerCase())
        )
      : countries;

  useEffect(() => {
    console.log("Retrieving countries from Countries API...");
    countriesService.getAll().then((allCountries) => {
      setCountries(allCountries);
      console.log(`Obtained ${allCountries.length}`);
    });
  }, []);

  return (
    <div>
      <h1>COUNTRIES</h1>
      <CountryFilter
        filter={countryInput}
        handleFilterChange={handleCountryInput}
      />
      <Countries
        filteredCountries={filteredCountries}
        hasFilter={countryInput.length > 0}
      />
    </div>
  );
};

export default App;
