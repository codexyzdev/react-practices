export default function Content({ parts, exercises }) {
  return (
    <>
      <section>
        {parts.map((el, i) => {
          return (
            <p key={i}>
              {el} {exercises[i]}
            </p>
          );
        })}
      </section>
    </>
  );
}
