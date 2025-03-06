import { useState } from 'react';
import getTopArtists from './getTopArtists';
// import './App.css'

const TIMEFRAMES = {
    "4 weeks": "short_term",
    "6 months": "medium_term",
    "12 months": "long_term"
};

const MIN_ARTISTS = 1;
const MAX_ARTISTS = 50;
const DEFAULT_ARTIST_COUNT = 20;

function ArtistItem({number, artist}) {
    /*
        Artist Item - function to return react component to display a track object
    */
    return <>
        <div id="spotify-item">
            <p>{number}. {artist.name}</p>
            {artist.imageUrl && (
                <img id="spotify-image" src={artist.imageUrl} alt={artist.name}/>
            )}
        </div>
    </>
}

function isValidCount(countString) {
    /*
        Returns true if the string countString is "" or represents a valid number bwetween MIN_ARTISTS and MAX_ARTISTS
    */
    if (Number.isNaN(countString)) {  // check variety of invalid cases, eg, letters, multiple decimals, etc
        return false;
    } else if (countString == "") {  // special case, if empty string, return true so user can clear field
        return true;
    } else if (MIN_ARTISTS <= Number(countString) && Number(countString) <= MAX_ARTISTS) {  // if in bounds, return true
        return true;
    } else {  // must be valid number, but out of bounds
        return false;
    }
}

function refreshArtists(token, setTopArtists, artistCount, artistTimeFrame, setArtistCount) {
    /*
        
    */
    let count = artistCount;  // the number of artists to get. Make a new variable so that it can be changed
    if (artistCount == "") {  // if the entry is blank, set to default value
        count = DEFAULT_ARTIST_COUNT;
    } else if (!Number.isInteger(Number(count))) {  // if entry is not integer, round to nearest
        count = Math.round(Number(count));
    }
    // check bounds
    if (count < MIN_ARTISTS) {  // if entry is below minimum, set to minimum
        count = MIN_ARTISTS;
    } else if (count > MAX_ARTISTS) {  // if entry is above maximum, set to maximum
        count = MAX_ARTISTS;
    }
    setArtistCount(count);  // set the entry field to be the validated value, in case it changed
    getTopArtists(token, setTopArtists, count, TIMEFRAMES[artistTimeFrame]);  // call function to fetch artists
}


export default function Artists({token, topArtists, setTopArtists}){
    let [artistCount, setArtistCount] = useState(DEFAULT_ARTIST_COUNT);  // How many top artists should be returned
let [artistTimeFrame, setArtistTimeFrame] = useState("4 weeks");  // the timeframe to get artists from
return (
    <>
        <h1 id="title">Artists</h1>

        <p id="selection_menu">Get top  
            <input id="input-amount" type='number' value={artistCount} onChange={
                event => isValidCount(event.target.value) ? setArtistCount(event.target.value) : null}>
            </input>
            Artists from the last  
            <select id="select-time" value={artistTimeFrame} key={TIMEFRAMES['4 weeks']} onChange={event => setArtistTimeFrame(event.target.value)}>
                {Object.keys(TIMEFRAMES).map((timeFrame) => <option value={timeFrame}>{timeFrame}</option>)}
            </select>
        </p>
        
        <div id="button_box">
            <button id="get_button" onClick={() => refreshArtists(token, setTopArtists, artistCount, artistTimeFrame, setArtistCount)}>Get Top Artists</button>
        </div>
        {
        topArtists ?  // if the top artists have been retrieved already, display them
            <>
                
                <div id="grid">                    
                    {topArtists.map((artist, i) => <ArtistItem number={i + 1} artist={artist}/>)}
                </div>
            </>
        :  // otherwise display a placeholder
            <p>Press button to load artists</p>
        }
    </>
);

}