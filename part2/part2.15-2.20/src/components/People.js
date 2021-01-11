import React from 'react'
import Person from './Person';

const People = ({persons, newSearch, handleDelete}) => {
    const peopleArray = persons.map(person => person.name.toLowerCase().includes(newSearch.toLowerCase()) ? <Person handleDelete={handleDelete} value={person.id} name={person.name} number={person.number} key={person.name}/> : null )
    return (
        <div>
            {peopleArray}
        </div>
    )
}

export default People