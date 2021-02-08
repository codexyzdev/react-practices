export default function Total({ exercises }) {
  const total = exercises.reduce((acc, cur) => acc + cur, 0);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
}
