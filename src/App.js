import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/components/searchBar/searchBar.js';
import SearchResults from '../src/components/searchResults/searchResults.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults />

      </header>
    </div>
  );
}

export default App;
