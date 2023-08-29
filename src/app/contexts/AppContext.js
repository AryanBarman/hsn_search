'use client'
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider value={{ tableData, setTableData, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
}
