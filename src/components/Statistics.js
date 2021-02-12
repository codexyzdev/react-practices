import Statistic from "./Statistic"
export default function Statistics({ good, neutral, bad }) {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <h3>No feedback given</h3>
      </>
    )
  }
  // average n / (g-b)
  // positive g/all
  const all = good + neutral + bad
  const average = neutral / (good - bad)
  const positive = (good / all) * 100

  return (
    <>
      <h2>Statistics</h2>
      <section>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <p>All: {all}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}%</p>
      </section>
    </>
  )
}
