import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import TopBar from './TopBar';

export default function AppBar() {
  return (
    <header>
      <TopBar />
      <SearchBar />
      <Navbar />
    </header>
  );
}
