import { Link } from 'react-router-dom';

const Chapters = () => (
  <>
    <h2>Chapters</h2>
    <ul>
      <li>
        <Link to="/chapters/chapter-2/section-1">Chapter 2</Link>
      </li>
    </ul>
  </>
);

export default Chapters;
