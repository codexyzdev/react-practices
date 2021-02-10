import Part from './Part';
import '../Components/styles/content.css';
export default function Content({ parts, exercises }) {
  return (
    <>
      <section className="content">
        <Part part={parts[0]} exercise={exercises[0]} />
        <Part part={parts[1]} exercise={exercises[1]} />
        <Part part={parts[2]} exercise={exercises[2]} />
      </section>
    </>
  );
}
