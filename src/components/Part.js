import '../Components/styles/part.css';
export default function Part({ part, exercise }) {
  return (
    <p className="p">
      {part} {exercise}
    </p>
  );
}
