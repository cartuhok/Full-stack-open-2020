import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import People from './People'
import PersonForm from './PersonForm'
import peopleService from '../services/people'
import Notification from './Notification'


const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [notification, setNotification] = useState(null)
  const [status, setStatus] = useState('')


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
          setStatus('success')
          setNotification(`Updated ${newNumber.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
      } else {
          console.log('nope.')
      }
    }

    const handleNewNames = () => { 
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
      setStatus('success')
      setNotification(`Added ${nameObj.name}`)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
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
    }).catch(error => {
      setStatus('error')
      setNotification(`${event.target.name} has already been removed from the server`)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    })
    } else {
        console.log('nope.');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} status={status} />
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