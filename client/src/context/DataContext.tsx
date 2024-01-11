import { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  children: React.ReactNode;
}

type DataContextType = {
  joke: { id: string; value: string } | null;
  setJoke: Dispatch<SetStateAction<null>>;
  error: { message: string } | null;
  setError: Dispatch<SetStateAction<{ message: string } | null>>;
};

export const DataContext = createContext<DataContextType>(undefined!);

export const DataContextProvider = ({ children }: Props) => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState<{ message: string } | null>(null);

  return (
    <DataContext.Provider
      value={{
        joke,
        setJoke,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataContext.displayName = 'DataContext';