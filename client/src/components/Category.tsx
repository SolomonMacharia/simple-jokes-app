import { useLazyQuery } from '@apollo/client';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { GET_RANDOM_JOKE } from '../queries';

type Props = {
  category: { name: string }; 
};

export function Category({ category }: Props) {
  const { setJoke, setError } = useContext(DataContext);
  const [getRandomJoke, { loading }] = useLazyQuery(GET_RANDOM_JOKE, {
    variables: { category: category.name },
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setJoke(data.getRandomJoke);
    },
    onError: (error) => {
      setError(error);
    }
  });

  const handleClick = () => {
    getRandomJoke({ variables: { category: category.name } });
  };

  return (
    <button
      aria-label={category.name}
      disabled={loading}
      aria-busy={loading}
      onClick={handleClick}
      className="category-list__item"
    >
      {loading ? 'Loading' : category.name}
    </button>
  );
}