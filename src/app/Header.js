import React, { useState, useEffect } from 'react';
import './Header.css';
import NavigationBar from './NavigationBar';
import { useAppContext } from './contexts/AppContext';
const Header = () => {
  const { search, setSearch } = useAppContext();
  return (
    <>
    <div className="flexbox-header">
      <h2><span>HSN Search</span></h2>
      <br />
      <h1>HSN Code List and GST Rate Finder</h1>
      <br />
      <NavigationBar/>
        </div>
    </>
  );
};

export default Header;
