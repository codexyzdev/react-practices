import { useState } from 'react'

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <p>The app is used by pressing the buttons</p>
  }
  return <p>{allClicks.join(' ')}</p>
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const hello = (who) => {
  return () => {
    console.log('hello', who)
  }
}
export default function HandlingArrays() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <strong onClick={hello('world!')}>Say Hello</strong>
      {left}
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}
