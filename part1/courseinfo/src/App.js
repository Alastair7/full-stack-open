const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title = { props.parts[0].title } exercises = {props.parts[0].exercises} />
      <Part title = { props.parts[1].title } exercises = {props.parts[1].exercises} />
      <Part title = { props.parts[2].title } exercises = {props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{ props.title } {props.exercises }</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
      }, 0)}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 }
  ]
  const totalExercises = parts.map(part => part.exercises)
  return (
    <div>
     <Header course= { course } />
     <Content parts = { parts } />
     <Total totalExercises = { totalExercises } />
    </div>
  )
}

export default App;
