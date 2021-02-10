import useLocalStorage from '../Hooks/useLocalStorage';
export default function ComplexState() {
  const [clicks, setClicks] = useLocalStorage('clicks', {
    left: 0,
    rigth: 0,
  });

  const [countClicks, setCountClicks] = useLocalStorage('countCliks', 0);

  const handleLeftClick = () => {
    const newClick = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClick);
    setCountClicks(countClicks + 1);
  };
  const handleRigthClick = () => {
    const newClick = {
      ...clicks,
      rigth: clicks.rigth + 1,
    };
    setClicks(newClick);
    setCountClicks(countClicks + 1);
  };
  return (
    <section>
      <h2>{countClicks}</h2>
      <button onClick={handleLeftClick}>Left {clicks.left}</button>
      <button onClick={handleRigthClick}>Rigth {clicks.rigth}</button>
    </section>
  );
}
