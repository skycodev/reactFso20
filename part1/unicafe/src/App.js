import { useState } from 'react'
import './App.css'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log('set de estados after')

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercent = ((good / all) * 100)

  return (
    <>
      {console.log('renderizamos de nuevo')}
      <section className='feedback'>
        <h1>give feedback</h1>
        <br />
        <div className='buttons-content'>
          <button className='btn' onClick={() => setGood(good + 1)}>good</button>
          <button className='btn' onClick={() => setNeutral(neutral + 1)}>neutral</button>
          <button className='btn' onClick={() => setBad(bad + 1)}>bad</button>
        </div>
        <br />
        <div className='display-content'>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>All:{all}</p>
          <p>Average:{average}</p>
          <p>Positive:{all > 0 && positivePercent} %</p>
        </div>
      </section>
    </>
  )
}

export default App
