import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import People from './People'
import PersonForm from './PersonForm'
import peopleService from '../services/people'


const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const setPeople = () => peopleService.getAll()
  .then(initialPeople => {
    setPersons(initialPeople)
  })

  useEffect(() => {
    setPeople()
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
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(confirm) {
        const personToUpdate = persons.find(p => p.name === newName)
        const updatedNumber = {...personToUpdate, number: newNumber}
        peopleService.swap(updatedNumber).then(newNumber => {
          setPersons(persons.map(person => person.id !== newNumber.id ? person : newNumber))
          setNewName('')
          setNewNumber('')
        })
      } else {
          console.log('nope.')
      }
    }

    const handleNewNames = () => { 
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    }
      
    if (matchCheck.includes(true)) {
      alert()
    } else {
      handleNewNames() 
      peopleService.create(nameObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }

  }

  const handleDelete = (event) => {
    const confirm = window.confirm(`Are you sure you want to delete ${event.target.name} ?`)
    if (confirm) {
      peopleService.remove(event.target).then(() => {
        setPeople()
    })
    } else {
        console.log('nope.');
    }
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
      <People persons={persons} newSearch={newSearch} handleDelete={handleDelete}/>
    </div>
  )
}

export default App