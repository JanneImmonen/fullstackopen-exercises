import { useState } from 'react'

// define the Button component
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

// define the StatisticLine component
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// define the Statistics component
const Statistics = ({ good, neutral, bad }) => {
  // calculate total feedback
  const total = good + neutral + bad

  // if no feedback has been given yet, display a message
  if (total === 0) {
    return <p>No feedback given</p>
  }

  // calculate average score
  const average = (good - bad) / total

  // calculate percentage of positive feedback
  const positivePercentage = (good / total) * 100

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positivePercentage + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // function to handle good feedback
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  // function to handle neutral feedback
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  // function to handle bad feedback
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
