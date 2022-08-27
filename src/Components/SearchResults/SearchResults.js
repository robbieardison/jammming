import React from 'react';
import TrackList from './TrackList.js';
import './SearchResults.css';

class SearchResults extends ReactComponent {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        )
    }
}