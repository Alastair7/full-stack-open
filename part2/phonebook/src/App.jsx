import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { useState, useEffect } from "react";
import personService from "./services/persons";
import Notification from "./Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    console.log("Retrieving Persons from the server...");
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      console.log("Retrieved", initialPersons.length, "persons");
    });
  }, []);

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
      const windowSelect = window.confirm(
        `${newName} is already added to phonebook. replace the old number with a new one?`
      );

      if (windowSelect) {
        const personObject = persons.find((person) => person.name === newName);
        console.log("Found Person to Update:", personObject);
        const updatePerson = {
          id: personObject.id,
          name: personObject.name,
          number: newNumber,
        };

        console.log("Updating Person...");
        personService
          .update(updatePerson.id, updatePerson)
          .then((updatedPerson) => {
            console.log(`${updatedPerson.name} data updated correctly`);
            setNewName("");
            setNewNumber("");
            setPersons(
              persons.map((person) =>
                person.id !== updatePerson.id ? person : updatePerson
              )
            );
            setNotification(
              `Number has been updated to ${updatedPerson.number}`
            );
          });
      }

      setTimeout(() => {
        setNotification(null);
      }, 5000);
      return;
    }
    console.log("Adding new person...");
    const Person = {
      name: newName,
      number: newNumber,
    };

    personService.create(Person).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      console.log("New Person added ", Person);
      setNewName("");
      setNewNumber("");
      setNotification(`${Person.name} has been added to PhoneBook`);
    });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const deletePerson = (id) => {
    console.log("Delete ID:", id);

    const windowSelect = window.confirm(
      "Do you really want to delete this person?"
    );

    if (windowSelect === true) {
      personService.remove(id).then((resultStatus) => {
        console.log("Person removed succesfully. Status:", resultStatus);
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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
      <Notification message={notification} />
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
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
