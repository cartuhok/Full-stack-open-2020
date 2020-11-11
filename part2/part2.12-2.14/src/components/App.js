import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import Countries from './Countries'

const App = () => {
  const [country, setCountry] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response =>
      setCountry(response.data)  
    )
  },[])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      <SearchForm
        onChange={handleSearchChange}
        name={country}
      />
      <Countries country={country} newSearch={newSearch}/>
    </div>
  )
}

export default App