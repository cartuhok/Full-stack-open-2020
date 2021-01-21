const express = require('express')
const app = express()

let notes = [
  {
      id: 1, 
      name: "Carter Rink",
      number: "978-578-0031"
  },
  {
      id: 2, 
      name: "Alexandra Plante",
      number: "207-330-0555"
  },
  {
      id: 3,
      name: "Bub",
      number: "1-800-BONES"
  },
  {
      id: 4,
      name: "Tyler Rink",
      number: "420-773-189-458"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
