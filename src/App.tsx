import logo from './logo.svg';
import './App.css';
import { GET_ANIME_LIST } from './utils/queryGraphApolloClient';
import { useQuery } from '@apollo/client';

function App() {

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
