import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h2>Page not found</h2>
    <p>The page you requested does not exist.</p>
    <Link to="/">Return to About</Link>
  </>
);

export default NotFound;
