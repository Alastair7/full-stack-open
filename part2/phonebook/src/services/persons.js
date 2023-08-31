import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error(`An error has occurred while obtaining persons: ${error}`);
    });
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error(`An error has occurred while creating person: ${error}`);
    });
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.error(`An error has occurred while updating person: ${error}`);
    });
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then((response) => response.status)
    .catch((error) => {
      console.error(`An error has occurred while deleting person: ${error}`);
    });
};

const PersonsService = {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
};
export default PersonsService;
