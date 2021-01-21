const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())

let people = [
  {
      id: 1, 
      name: "Carter Rink",
      number: "978-578-0031"
  },
  {
      id: 2, 
      name: "Alexandra Plante",
      number: "237-330-021155"
  },
  {
      id: 3,
      name: "Bub",
      number: "1-800-BONES"
  },
  {
      id: 4,
      name: "Tyler Rink",
      number: "4202-7723-189-4528"
  }
]

morgan.token('body', (req, res) => { return JSON.stringify(req.body) })

app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.body(req, res),
  ].join(' ')
}))

//Homepage
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

//Info Page
app.get('/info', (request, response) => {
  response.send(`
  <p>Phonebook has info for ${people.length} people</p>
  <p>${new Date()}</p>
  `)
})

//Specific Person
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = people.find(person => person.id === id)
  response.json(person)
})

//All People
app.get('/api/persons', (request, response) => {
  response.json(people)
})

//Delete Someone (Resource)
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  people.filter(person => person.id !== id)

  response.status(204).end()
})

//Random ID Helper Function
const generateID = () => {
  return Math.floor(Math.random() * Math.floor(1000))
}

//Adding Someone (POST)
app.post('/api/persons', (request, response) => {
  const body = request.body

  const nameMatch = people.filter(person => person.name === body.name)

  if (!body.name) {
    return response.status(400).json({
      error: 'Must include a name'
    })
  } else if (!body.number) {
    return response.status(400).json({
      error: 'Must include a phone number'
    })
  } else if (nameMatch.length > 0) {
    return response.status(400).json({
      error: 'Name must be unique'
    })
  }

  const person = {
    id: generateID(),
    name: body.name,
    number: body.number
  }

  people = people.concat(person)

  response.json(body)
})

//Listen for HTTP requests sent to port 3001 
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
