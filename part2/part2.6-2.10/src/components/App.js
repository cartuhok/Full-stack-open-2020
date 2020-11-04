import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const matchCheck = persons.map(person => person.name === newName)
    const nameObj = {
      name: newName
    }
    const alert = () => {
      window.alert(`${newName} is already added to phonebook`)
      setPersons(persons)
      setNewName('')
    }
    const handleNewNames = () => { 
      setPersons(persons.concat(nameObj))
      setNewName('')
    }
    matchCheck.includes(true) ? alert() : handleNewNames()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}   
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App