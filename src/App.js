import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar.js';
import SearchResults from './components/searchResults.js';

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
