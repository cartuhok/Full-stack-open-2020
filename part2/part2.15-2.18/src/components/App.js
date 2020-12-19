import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import People from './People'
import PersonForm from './PersonForm'
import peopleService from '../services/people'

console.log(peopleService);

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {

    peopleService.getAll()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()

    const matchCheck = persons.map(person => person.name === newName)

    const nameObj = {
      name: newName,
      number: newNumber
    }

    const alert = () => {
      window.alert(`${newName} is already added to phonebook`)
      setPersons(persons)
      setNewName('')
      setNewNumber('')
    }

    const handleNewNames = () => { 
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    }
    
    matchCheck.includes(true) ? alert() : handleNewNames()  
    
    peopleService.create(nameObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        console.log(returnedPerson);
      })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />

      <h2>Add New Contact:</h2>
      <PersonForm 
        onSubmit={addName}
        name={{value: newName, onChange: handleNameChange}}
        number={{value: newNumber, onChange: handleNumberChange}}
      />

      <h2>Numbers</h2>
      <People persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App