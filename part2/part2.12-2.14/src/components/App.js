import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import Countries from './Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])

  const [ newSearch, setNewSearch ] = useState('')
  const [ toggle, setToggle ] = useState(false)

  const call = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    }
    )
  }

  useEffect(call,[])
  
  const countryIncludes = countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
  const countryMatches = countryIncludes.some(country => country.name.toLowerCase() === newSearch.toLowerCase())

  let matchedResult = ''
  if (countryMatches) {
    matchedResult = countryIncludes.filter(country => country.name.toLowerCase() === newSearch.toLowerCase())
  } 
 
  const handleSearchEvent = (event) => {
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
        onChange={handleSearchEvent}
        value={newSearch}
      />
      {toggle && countryMatches && (
        <Countries countries={matchedResult}  />
      )}
      {toggle && !countryMatches && (
        <Countries
          countries={countryIncludes}
          handleClickEvent={handleClickEvent}
        />
      )}
    </div>
  )
}

export default App