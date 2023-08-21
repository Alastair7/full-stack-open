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

export default Course;
