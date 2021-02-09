import { createContext, useMemo } from 'react';

export const GlobalContext = createContext();

export function ProviderGlobal(props) {
  const data = 'Hello World! From Global Context ';
  const value = useMemo(() => {
    return { data };
  }, [data]);

  return <GlobalContext.Provider value={value} {...props} />;
}
