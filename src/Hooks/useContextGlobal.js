import { useContext } from 'react';
import { GlobalContext } from '../Context/global';

export function useContextGlobal() {
  const context = useContext(GlobalContext);
  if (!context)
    throw Error(
      'useContextGlobal debe estar dentro del proveerdor GlobalContext'
    );
  return context;
}
