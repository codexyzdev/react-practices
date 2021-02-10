import { useContextGlobal } from '../Hooks/useContextGlobal';
import '../Components/styles/header.css';
export const Header = ({ course }) => {
  const { data } = useContextGlobal();
  return (
    <>
      <header className="header">
        <h1>
          {course} <br /> <span>{data}</span>
        </h1>
      </header>
    </>
  );
};
