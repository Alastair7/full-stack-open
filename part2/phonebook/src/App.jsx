import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
