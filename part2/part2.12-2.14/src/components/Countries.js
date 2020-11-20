import React from 'react'
import Country from './Country'

const Countries = ({ countries, handleClickEvent}) => {
    const wide = countries.length > 10
    const narrow = countries.length > 1 && countries.length <= 10
    const exact = countries.length === 1

    const countryResults = countries.map((country) => {
      return (
        <div key={country.name}>
          {country.name}
          <button onClick={handleClickEvent} id={country.name} value={country.capital}>
            Show
          </button>
        </div>
      )
    })
  
    return (
      <div>
        {wide && "Too many matches, specify another filter"}
        {narrow && <div>{countryResults}</div>}
        {exact && <Country country={countries[0]}  />}
      </div>
    )
  }

export default Countries