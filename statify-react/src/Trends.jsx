import React, { useState } from 'react';
import TasteComparator from './TasteComparator';




export default function Trends({ token, tracks, setTracks }) {
    let [trends, setTrends] = useState(null);

    if (!trends) {
        setTrends("loading");  // indicate that trends are loading, not to be displayed yet
        TasteComparator(token, tracks, setTracks).
            then((trends) => {setTrends(trends || "failed to load trends")});  // when trends are fetched, store them
    }

    return (
        <>
            <h1 id="title">Trends</h1>

            <p>National Trends
            </p>

        </>
    );
}