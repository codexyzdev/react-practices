import { useState } from "react"
import "../Components/styles/anectodes.css"

export default function Anectodes() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ]
  let [selected, setSelected] = useState(() =>
    Math.floor(Math.random() * anecdotes.length)
  )
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  })

  const azar = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected((selected = random))
  }
  const vote = (selected) => () => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div className="main">
      <p>
        {anecdotes[selected]}
        <span> Votes {points[selected]}</span>
      </p>
      <button onClick={() => azar()}>next anectodes</button>
      <button onClick={vote(selected)}>vote</button>
      <section>
        <h3>Anectodes with most votes</h3>
      </section>
    </div>
  )
}
