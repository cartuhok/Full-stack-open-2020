import React from 'react'

const People = ({persons, newSearch}) => {
    const peopleArray = persons.map(person => person.name.toLowerCase().includes(newSearch.toLowerCase()) ? <p key={person.name}>{person.name}: {person.number} </p> : null )
    console.log(peopleArray);
    return (
        <div>
            {peopleArray}
        </div>
    )
}

export default People