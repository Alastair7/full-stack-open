import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const getPersons = () => {
    console.log("Retrieving Persons from the server...");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("Promise Fullfilled");
      setPersons(response.data);
      console.log("Retrieved", response.data.length, "persons");
    });
  };

  useEffect(getPersons, []);

  const personExists = (persons, name) => {
    console.log(
      "NewName: ",
      name,
      "|| Exists: ",
      persons.some((person) => person.name === name)
    );
    return persons.some((person) => person.name === name);
  };

  const addPerson = (event) => {
    event.preventDefault();

    console.log("Searching person...");
    if (personExists(persons, newName)) {
      console.error(newName, "already exists");
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    console.log("Adding new person...");
    const Person = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(Person));
    console.log("New Person added ", Person);
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons =
    filter.length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().match(filter.toLowerCase())
        )
      : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
