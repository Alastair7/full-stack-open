import CountryInfo from "./CountryInfo";

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
            <p key={country.name.common}>{country.name.common}</p>
          );
        })
      )}
    </>
  );
};

export default Countries;
