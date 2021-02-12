import Content from "./Components/Content"
import Total from "./Components/Total"
import { Header } from "./Components/Header"
import TextArea from "./Components/TextArea"
import ComplexState from "./Components/ComplexState"
import HandlingArrays from "./Components/HandlingArrays"
import Example from "./Components/Example"
import GiveFeedback from "./Components/GiveFeedback"
import Anectodes from "./Components/Anectodes"

function App() {
  const course = "Half Stack application development"
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ]
  const exercises = [10, 7, 14]
  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
      <TextArea />
      <ComplexState />
      <HandlingArrays />
      <Example />
      <GiveFeedback />
      <Anectodes />
    </>
  )
}

export default App
