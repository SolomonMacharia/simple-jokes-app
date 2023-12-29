import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { Categories } from './Categories';
import { DataContext } from '../context/DataContext';
import { GET_CATEGORIES } from '../queries';

function App() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const { joke, error: jokeError } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error : {error.message}</p>;

  return (
    <div>
      <h1>Hi there! 👋</h1>
      <p>Wanna hear a random joke?</p>
      <p>Click on one of the categories below!</p>
      {jokeError ? (
        <p className="error">{jokeError.message}</p>
      ) : (
        <div className="joke">{joke && <p>{joke.value}</p>}</div>
      )}
      <Categories categories={data.getCategories} />
    </div>
  );
}

export default App;