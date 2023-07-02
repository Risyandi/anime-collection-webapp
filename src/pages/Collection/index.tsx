import { Link } from 'react-router-dom';
import MainLayout from '../../common/MainLayout';

const CollectionPage = () => {
  return (
    <div>
      <MainLayout/>
      <p>Collection Page</p>
      <p>
        <strong>
          <Link to="/">Homepage</Link>
        </strong>
      </p>
    </div>
  );
};

export default CollectionPage;
