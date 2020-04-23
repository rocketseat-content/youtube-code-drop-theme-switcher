import { useState, useEffect } from 'react';

function usePersistedState<T>(key: string, initialState: T) {
  const state = useState<T>(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state[0]));
  }, [key, state]);

  return state;
}

export default usePersistedState;
