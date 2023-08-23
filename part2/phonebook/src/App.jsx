import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-44-5323523" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
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

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
