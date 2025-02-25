import { useState } from 'react';
import getTopTracks from './getTopTracks';


// a list of time frames accepted by the spotify API formatted as:
// {"Value to display to user": "Value to pass to the API"}
const TIMEFRAMES = {
    "4 weeks": "short_term",
    "6 months": "medium_term",
    "12 months": "long_term"
};

const MIN_TRACKS = 1;
const MAX_TRACKS = 50;
const DEFAULT_TRACK_COUNT = 20;


function TrackItem({number, track}) {
    /*
        TrackItem - function to return react component to display a track object
    */
    return <>
        <p>{number}. {track.name}</p>
    </>
}


function isValidCount(countString) {
    /*
        Returns true if the string countString is "" or represents a valid number bwetween MIN_TRACKS and MAX_TRACKS
    */
    if (Number.isNaN(countString)) {  // check variety of invalid cases, eg, letters, multiple decimals, etc
        return false;
    } else if (countString == "") {  // special case, if empty string, return true so user can clear field
        return true;
    } else if (MIN_TRACKS <= Number(countString) && Number(countString) <= MAX_TRACKS) {  // if in bounds, return true
        return true;
    } else {  // must be valid number, but out of bounds
        return false;
    }
}


function refreshTracks(token, setTopTracks, trackCount, trackTimeFrame, setTrackCount) {
    /*
        This function validates that trackCount is within the bounds of MIN_TRACKS and MAX_TRACKS.
        It then calls setTrackCount with the validated value obtained from trackCount.
        It finally calls getTopTracks with the parameters: token, setTopTracks, validatedTrackCount, trackTimeFrame
        Parameters.
            token - the token to send to the spotify API
            setTopTracks(any) - a success handler function to pass to getTopTracks
            trackCount - the number of tracks to return. Cannot be NaN. Will be validated other than that
            trackTimeFrame - a key in TIMEFRAMES, where the relative value is the timeframe to pass to getTopTracks/the spotify API
            setTrackCount(any) - function to call with the validated version of trackCount
    */
    let count = trackCount;  // the number of tracks to get. Make a new variable so that it can be changed
    if (trackCount == "") {  // if the entry is blank, set to default value
        count = DEFAULT_TRACK_COUNT;
    } else if (!Number.isInteger(Number(count))) {  // if entry is not integer, round to nearest
        count = Math.round(Number(count));
    }
    // check bounds
    if (count < MIN_TRACKS) {  // if entry is below minimum, set to minimum
        count = MIN_TRACKS;
    } else if (count > MAX_TRACKS) {  // if entry is above maximum, set to maximum
        count = MAX_TRACKS;
    }
    setTrackCount(count);  // set the entry field to be the validated value, in case it changed
    getTopTracks(token, setTopTracks, count, TIMEFRAMES[trackTimeFrame]);  // call function to fetch tracks
}


export default function Tracks({token, topTracks, setTopTracks}){
    let [trackCount, setTrackCount] = useState(DEFAULT_TRACK_COUNT);  // How many top tracks should be returned
    let [trackTimeFrame, setTrackTimeFrame] = useState("4 weeks");  // the timeframe to get tracks from
    return(
        <>
        <h1>Tracks</h1>

        <p>Get top
            <input type='number' value={trackCount} onChange={
                event => isValidCount(event.target.value) ? setTrackCount(event.target.value) : null}>
            </input>
            Tracks from the last
            <select value={trackTimeFrame} key={TIMEFRAMES['4 weeks']} onChange={event => setTrackTimeFrame(event.target.value)}>
                {Object.keys(TIMEFRAMES).map((timeFrame) => <option value={timeFrame}>{timeFrame}</option>)}
            </select>
        </p>
        

        <button onClick={() => refreshTracks(token, setTopTracks, trackCount, trackTimeFrame, setTrackCount)}>Get Top Tracks Test</button>


        {
        topTracks ?  // if the top tracks have been retrieved already, display them
            <>
                <p>Tracks found</p>
                {topTracks.map((track, i) => <TrackItem number={i + 1} track={track}/>)}
            </>
        :  // otherwise display a placeholder
            <p>Press button to load tracks</p>
        }
        </>
    )
}