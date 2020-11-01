import React from 'react'
import Part from './Part'
import Total from "./Total"

const Content = ({course}) => {
  return (
  <>
    {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    <Total course={course} />
  </>
  )
}

export default Content