import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <SearchBar /> */}
        <div class="App-playlist">
          {/* <SearchResult /> */}
          {/* <Playlist /> */}
        </div>
        </div>
      </div>
  );
}
}

export default App;
