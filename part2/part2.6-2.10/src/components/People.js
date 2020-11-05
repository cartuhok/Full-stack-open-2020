import React from 'react'

const People = ({persons, newSearch}) => {
    return (
        <div>
            {persons.map(person => person.name.toLowerCase().includes(newSearch.toLowerCase()) ? <p key={person.name}>{person.name}: {person.number} </p> : null )}
        </div>
    )
}

export default People