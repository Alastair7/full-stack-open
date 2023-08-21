const Header = (props) => <h1>{props.name}</h1>;

const Part = ({ part }) => {
  console.log(
    "Part ID: ",
    part.id,
    "PartName: ",
    part.name,
    "Exercises: ",
    part.exercises
  );

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}

      <p>
        Total of{" "}
        {parts.reduce((sum, { exercises }) => {
          return sum + exercises;
        }, 0)}{" "}
        exercises
      </p>
    </div>
  );
};
const Course = ({ course }) => {
  const { id, name, parts } = course;
  console.log(
    "Course Id: ",
    id,
    "Course Name: ",
    name,
    "Course Parts: ",
    parts
  );
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  console.log("Course data: ", course);

  return <Course course={course} />;
};

export default App;
