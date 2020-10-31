import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => (
  <button onClick={props.handleClick} >
    {props.text}
  </button>
)

const Statistic = props =>  (
    <>
    <table>
      <tbody>
        <tr>
          <td>
            {props.statText}
          </td>
          <td>
            {props.statRating}
          </td>
        </tr>
      </tbody>
    </table>
    </>
)

const Statistics = (props) => {
  if (props.statRating.sum === 0) {
    return (
      <p>No feedback given.</p>
    )
  }
  else {
    return (
      <>
      <Statistic statText="good" statRating={props.statRating.good} />
      <Statistic statText="neutral" statRating={props.statRating.neutral} />
      <Statistic statText="bad" statRating={props.statRating.bad} />
      <Statistic statText="all" statRating={props.statRating.sum} />
      <Statistic statText="average" statRating={props.statRating.average} />
      <Statistic statText="percent positive" statRating={props.statRating.goodPercentage} />
      </>
    )
  }
}

const App = () => {

  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)

  const sum = good + neutral + bad
  const average = (good-bad) / sum
  const goodPercentage = (good / sum)*100+"%"

  const statRating = {good, neutral, bad, sum, average, goodPercentage}

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleClick={() => addGood(good + 1)} />
      <Button text="neutral" handleClick={() => addNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => addBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics statRating={statRating} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
