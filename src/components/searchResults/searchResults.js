import React from 'react';
import styles from './searchResults.module.css';

const trackObject = [{
    songTitle: 'Smooth Criminal',
    artist: 'Michael Jackson',
    album: 'Bad',
    id: 1
},
{
    songTitle: 'Living On a Prayer',
    artist: 'Jon Bon Jovi',
    album: 'Slippery When Wet',
    id: 2
 }, 
 {
    songTitle: 'Say My Name',
    artist: 'Destiny\'s Child',
    album: 'The Writing\'s on the Wall',
    id: 3
 }];

function SearchResults(){

    const resultsElement = trackObject.map((record) =>
        <ul>
            <li>{record.artist}</li>
            <li>{record.songTitle}</li>
            <li>{record.album}</li>
            <button className={styles.addPlaylistBtn}>+</button>
        </ul>
    );
    
    return (
        <div className={styles.resultsContainer}>
            <h1>Results</h1>
            {resultsElement}
        </div>
    );

};

export default SearchResults;