import { createContext, useContext, useState } from 'react';

const MyContextStates = createContext();

export function MyContextStates() {
  return useContext(MyContextStates);
}

export function AppProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <MyContextStates.Provider value={{ tableData, setTableData, search, setSearch }}>
      {children}
    </MyContextStates.Provider>
  );
}
