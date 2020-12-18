import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import People from './People'
import PersonForm from './PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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
    
    axios
      .post('http://localhost:3001/persons', nameObj)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        console.log(response);
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