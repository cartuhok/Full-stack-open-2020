import React from 'react'

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
        </div>
    )
}

export default Country

/*         */