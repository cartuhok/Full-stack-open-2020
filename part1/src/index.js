import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <>
    {props.course}
  </>
)

const Part = (props) => (
  <>
    <p>{props.part1} {props.part2} {props.part3} has {props.exercises1} {props.exercises2} {props.exercises3} exercises</p>
  </>
)

const Content = (props) => (
  <>
    <Part part1={props.part1} exercises1={props.exercises1}/>
    <Part part2={props.part2} exercises2={props.exercises2}/>
    <Part part3={props.part3} exercises3={props.exercises3}/>
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.total}</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
   
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

//How do I access vars within the App obj at this point in the course? 