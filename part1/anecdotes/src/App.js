import { useState } from 'react'
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]
const votes2 = []
votes2.length = anecdotes.length
votes2.fill(0)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votes2)
  const maxVotes = Math.max(...votes)

  const handleNext = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <section>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br />
        <p>has: {votes[selected]}</p>
        <br />
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[votes.indexOf(maxVotes)]}
        <p>has : {maxVotes}</p>
      </div>

    </section>
  )
}

export default App
