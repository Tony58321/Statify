import React, { useState } from 'react';
import TasteComparator from './TasteComparator';


function TrackDisplay({ track, index, userTrackNames }) {
    return <>
        <ul>{index + ". " + track.name + (userTrackNames.includes(track.name) ? "   ***" : "" )}</ul>
    </>;
}



export default function Trends({ token, tracks, setTracks }) {
    let [trends, setTrends] = useState(null);
    let [userTrackNames, setUserTrackNames] = useState(null);  // convert user's top tracks to their names

    if (!trends) {
        setTrends("loading");  // indicate that trends are loading, not to be displayed yet
        TasteComparator(token, tracks, setTracks).
            then((trends) => {setTrends(trends || "failed to load trends")});  // when trends are fetched, store them
    }

    if (!userTrackNames && tracks) {
        setUserTrackNames(tracks.map((track) => track.name));
    }

    return (
        <>
            <h1 id="title">Trends</h1>

            <p>Billboard top 100:</p>

            {!trends || trends == "loading" ?
            <p>Loading trends...</p>
            : trends == "failed to load trends" ?
            <p>Failed to load trends</p>
            :
            <ul>
                {trends.map((track, index) => <TrackDisplay key={index} track={track} index={index + 1} userTrackNames={userTrackNames}/>)}
            </ul>
            }

        </>
    );
}