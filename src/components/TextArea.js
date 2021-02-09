import useLocalStorage from '../Hooks/useLocalStorage';

export default function TextArea() {
  const [text, setText] = useLocalStorage('text', '');
  return (
    <form action="#">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="10"
      ></textarea>
    </form>
  );
}
