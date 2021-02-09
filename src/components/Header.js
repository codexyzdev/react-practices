import { useContextGlobal } from '../Hooks/useContextGlobal';

export const Header = ({ course }) => {
  const { data } = useContextGlobal();
  console.log(useContextGlobal());
  return (
    <>
      <header>
        <h1>
          {course} <span>{data}</span>
        </h1>
      </header>
    </>
  );
};
