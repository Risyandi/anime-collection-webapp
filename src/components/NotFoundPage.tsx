import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div id="notfound-page">
      <h1>Oops! 404</h1>
      <p>Sorry, Page not found. </p>
      <p> 
        Back to 
        <Link to='/anime-collection-webapp'> Homepage</Link>
      </p>
    </div>
  );
}
