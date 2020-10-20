import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
   
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
