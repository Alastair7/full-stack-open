import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);

  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log(`An error has occurred obtaining all countries: ${error}`);
    });
};

const CountriesService = {
  getAll: getAll,
};

export default CountriesService;
