import React, {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <table><tbody>
        <Statistic text={'good'} value={good} />
        <Statistic text={'neutral'} value={neutral} />
        <Statistic text={'bad'} value={bad} />
        <Statistic text={'all'} value={good+neutral+bad} />
        <Statistic text={'average'} value={(good-bad)/(good+neutral+bad)} />
        <Statistic text={'positive'} value={good/(good+neutral+bad)*100 + ' %'} />
      </tbody></table>
    </div>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
  
}

export default App