import { useState } from "react"
import "../Components/styles/giveFeedback.css"
import Statistics from "./Statistics"

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}
// average n / (g-b)
// positive g/all
export default function GiveFeedback() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="container">
      <h1>Give Feedback</h1>
      <section>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </section>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  )
}
