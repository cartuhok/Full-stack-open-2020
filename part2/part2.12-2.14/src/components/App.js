import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import Countries from './Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')
  const [ toggle, setToggle] = useState(false)
  
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)  
    }
    )
  },[])

  const countrySearch = countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
  const countryMatch = countrySearch.some(country => country.name.toLowerCase() === newSearch.toLowerCase())

  let filteredCountries = ''
  if (countryMatch) {
    filteredCountries = countrySearch.filter(country => country.name.toLowerCase() === newSearch.toLowerCase())
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    event.target.value === '' ? setToggle(false) : setToggle(true)
  }

  const handleClickEvent = (event) => {
   setNewSearch(event.target.id)
  }

  return (
    <div>
      <h1>Countries</h1>
      <SearchForm
        onChange={handleSearchChange}
        value={newSearch}
      />
      {toggle && countryMatch && (
        <Countries countries={filteredCountries} />
      )}
      {toggle && !countryMatch && (
        <Countries
          countries={countrySearch}
          handleClickEvent={handleClickEvent}
        />
      )}
    </div>
  )
}

export default App