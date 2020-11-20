import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
    
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <h2>Flag</h2>
            <img width="400" src={country.flag} alt="flag" />
            <h2>Weather</h2>
            <Weather capital={country.capital} />
        </div>
    )
}

export default Country
