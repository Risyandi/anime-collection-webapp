import { Link } from 'react-router-dom';
import MainLayout from '../../common/MainLayout';
import { GET_ANIME_LIST } from '../../utils/queryGraphApolloClient';
import { useQuery } from '@apollo/client';

const HomePage = () => {

  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      search: "detective conan",
      page: 2,
      perPage: 10
    },
  });

  console.log(loading, 'risyandi: loading');
  console.log(error, 'risyandi: error');
  console.log(data, 'risyandi: data');

  return (
  <div>
    <MainLayout/>
    <p>Homepage</p>
    <p>
      <strong>
        <Link to='/collections'>Collections</Link>
      </strong>
    </p>
  </div>
  );
};

export default HomePage;
