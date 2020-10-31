import React from 'react'

const Total = ({course}) => {

    const sum = course.parts.reduce((sum, part) => {
        return (sum + part.exercises) 
          }, 0)

    return(
    <>
     <h3>total of {sum} exercises</h3>
    </>
    )
}



export default Total