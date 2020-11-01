import React from 'react'

const Total = ({courses}) => {
    const courseParts = courses.parts.map(part => part.exercises)
    const sum = courseParts.reduce((sum, part) => {
        return (sum + part) 
    }, 0)
    return(
        <h3>total of {sum} exercises</h3>
    )
}

export default Total