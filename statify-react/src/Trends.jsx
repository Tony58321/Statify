import React, { useState } from 'react';
import TasteComparator from './TasteComparator';




export default function Trends({ token, tracks, setTracks }) {
    let [trends, setTrends] = useState(null);

    if (!trends) {
        TasteComparator(token, tracks, setTracks);
    }

    return (
        <>
            <h1 id="title">Trends</h1>

            <p>National Trends
            </p>

        </>
    );
}