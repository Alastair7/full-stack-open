import CountryInfo from "./CountryInfo";
import Country from "./Country";

const Countries = ({ filteredCountries, hasFilter }) => {
  const isSingle = filteredCountries.length === 1;

  return (
    <>
      {hasFilter && filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter...</p>
      ) : (
        filteredCountries.map((country) => {
          return isSingle ? (
            <CountryInfo key={country.name.common} country={country} />
          ) : (
            <Country key={country.name.common} countryData={country} />
          );
        })
      )}
    </>
  );
};

export default Countries;
