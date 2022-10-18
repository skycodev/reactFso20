import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad, all, average, positivePercent }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text='Good' value={good}/>
      <StatisticLine text='Neutral' value={neutral}/>
      <StatisticLine text='Bad' value={bad}/>
      <StatisticLine text='All' value={all}/>
      <StatisticLine text='Average' value={average}/>
      <StatisticLine text='Positive' value={positivePercent} percent="%"/>
      
    </div>
  )
}

export default Statistics
