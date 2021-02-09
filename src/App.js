import Content from './Components/Content';
import Total from './Components/Total';
import { Header } from './Components/Header';
import TextArea from './Components/TextArea';

function App() {
  const course = 'Half Stack application development';
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component',
  ];
  const exercises = [10, 7, 14];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
      <TextArea />
    </div>
  );
}

export default App;
