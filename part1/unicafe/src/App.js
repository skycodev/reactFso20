import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercent = ((good / all) * 100)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  return (
    <>
      <section className='feedback'>
        <h1>give feedback</h1>             
        <Button handleClick={increaseGood}>good</Button>
        <Button handleClick={increaseNeutral}>neutral</Button>
        <Button handleClick={increaseBad}>bad</Button>        
             
        {all > 0 ?
           <Statistics
           good={good}
           bad={bad}
           neutral={neutral}
           all={all}
           average={average}
           positivePercent={positivePercent}
         />
         :<p>No feedback given</p>      
        }
     
      </section>
    </>
  )
}

export default App
