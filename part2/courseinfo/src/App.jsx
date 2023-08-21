const Header = (props) => <h2>{props.name}</h2>;

const Part = ({ part }) => {
  console.log(
    "Part ID: ",
    part.id,
    "PartName: ",
    part.name,
    "Exercises: ",
    part.exercises,
    " from Part component"
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

      <p style={{ fontWeight: "bold" }}>
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
    "Course ID: ",
    id,
    "Course Name: ",
    name,
    "Course Parts: ",
    parts,
    " from course component"
  );
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  console.log("Course data from APP: ", courses);
  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </>
  );
};

export default App;
