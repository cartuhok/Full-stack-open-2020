import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response =>
      console.log(response.data)  
    )

  return (
    <div>
      <h1>Countries</h1>
    </div>
  )
}

export default App