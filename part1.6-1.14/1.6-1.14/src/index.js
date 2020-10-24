import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = (props) => (
  <button onClick={props.handleClick} >
    {props.text}
  </button>
)

const Results = (props) => (
  <>
    {props.text}: {props.rating} <br />
  </>
)


const App = () => {

  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)

  const sum = good + neutral + bad
  const average = (good-bad) / sum
  const goodPercentage = (good / sum)*100
    
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleClick={() => addGood(good + 1)} />
      <Button text="neutral" handleClick={() => addNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => addBad(bad + 1)} />
      <h1>Statistics</h1>
      <Results text="good" rating={good} />
      <Results text="neutral" rating={neutral} />
      <Results text="bad" rating={bad} />
      <Results text="all" rating={sum} />
      <Results text="average" rating={average} />
      <Results text="positive" rating={goodPercentage + " %"} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
