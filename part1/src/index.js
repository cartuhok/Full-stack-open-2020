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
    <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises}/>
    <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises}/>
    <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises}/>
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      
      <Content parts={parts} />
   
      <Total parts={parts} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
