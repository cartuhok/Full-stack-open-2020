import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = props => (
  <>
    <br />
    <button onClick={props.handleEvent}>{props.text}</button>
  </>
)

const Votes = ({votes}) => (
  <>
    <p>Has {votes} upvotes</p>
  </>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const score = [...points]
  const randomNumber =  Math.floor(Math.random()*anecdotes.length)
  

  const handleNext = () => {
    setSelected(randomNumber)
  }

  const handleVote = () => {
    score[selected]+= 1
    setPoints(score)
  }

  return (
    <div>
      {anecdotes[selected]}
      <Button text="next quote" handleEvent={handleNext} />
      <Button text="upvote" handleEvent={handleVote} />
      <Votes votes={score[selected]} />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)