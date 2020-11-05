import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

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
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          search contacts: <input 
                  value={newSearch}
                  onChange={handleSearchChange}   
                />
      </div>
      <h2>Add New Contact:</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}   
                />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
      {persons.map(person => person.name.toLowerCase().includes(newSearch.toLowerCase()) ? <p key={person.name}>{person.name}: {person.number} </p> : null )}
      </div>
    </div>
  )
}

export default App