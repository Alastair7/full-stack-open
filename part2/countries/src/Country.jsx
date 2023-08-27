import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ countryData }) => {
  const [showCountry, setShowCountry] = useState(false);
  const handleShowClick = () => setShowCountry(!showCountry);
  return (
    <>
      <p>
        {countryData.name.common}{" "}
        <button onClick={() => handleShowClick(countryData)}>Show</button>
      </p>
      {showCountry && <CountryInfo country={countryData} />}
    </>
  );
};

export default Country;
