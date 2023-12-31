const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map((languageKey) => {
          return <li key={languageKey}>{country.languages[languageKey]}</li>;
        })}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of country ${country.name.common}`}
      />
    </div>
  );
};

export default CountryInfo;
