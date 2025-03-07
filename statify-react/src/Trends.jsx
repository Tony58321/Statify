import React, { useState } from 'react';
import TasteComparator from './TasteComparator';




export default function Trends({ token }) {
    let [trends, setTrends] = useState(null);

    if (!trends) {
        TasteComparator(token);
    }

    return (
        <>
            <h1 id="title">Trends</h1>

            <p>National Trends
            </p>

        </>
    );
}