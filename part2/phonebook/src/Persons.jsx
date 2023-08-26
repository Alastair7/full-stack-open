const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <>
      {filteredPersons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => deletePerson(person.id)}>DELETE</button>
          </p>
        );
      })}
    </>
  );
};

export default Persons;
