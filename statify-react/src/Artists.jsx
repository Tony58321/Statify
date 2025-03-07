import React, { useState } from 'react';
import getTopArtists from './getTopArtists';

const TIMEFRAMES = {
    "4 weeks": "short_term",
    "6 months": "medium_term",
    "12 months": "long_term"
};

const MIN_ARTISTS = 1;
const MAX_ARTISTS = 50;
const DEFAULT_ARTIST_COUNT = 20;

function ArtistItem({ number, artist }) {
    return (
        <div id="spotify-item">
            <p>{number}. {artist.name}</p>
            {artist.imageUrl && (
                <img id="spotify-image" src={artist.imageUrl} alt={artist.name} />
            )}
        </div>
    );
}

function isValidCount(countString) {
    const count = Number(countString);
    return /^[1-9]$|^[1-4][0-9]$|^50$/.test(countString) && Number.isInteger(count);
}

function refreshArtists(token, setTopArtists, artistCount, artistTimeFrame, setArtistCount) {
    let count = artistCount;
    if (artistCount === "") {
        count = DEFAULT_ARTIST_COUNT;
    } else if (!Number.isInteger(Number(count))) {
        count = Math.round(Number(count));
    }

    if (count < MIN_ARTISTS) {
        count = MIN_ARTISTS;
    } else if (count > MAX_ARTISTS) {
        count = MAX_ARTISTS;
    }

    setArtistCount(count);
    getTopArtists(token, setTopArtists, count, TIMEFRAMES[artistTimeFrame]);
}

export default function Artists({ token, topArtists, setTopArtists }) {
    const [artistCount, setArtistCount] = useState(DEFAULT_ARTIST_COUNT);
    const [artistTimeFrame, setArtistTimeFrame] = useState("4 weeks");
    const [message, setMessage] = useState("");
    const [topArtistsFetched, setTopArtistsFetched] = useState(false);

    const handleArtistCountChange = (event) => {
        const value = event.target.value;
        setArtistCount(value);

        if (!isValidCount(value)) {
            setTopArtists(null);
            setMessage("Please enter a number between 1 and 50.");
        } else {
            setMessage("");
        }
    };

    return (
        <>
            <h1 id="title">Artists</h1>

            <p id="selection_menu">Get top
                <input
                    id="input-amount"
                    type='number'
                    value={artistCount}
                    onChange={handleArtistCountChange}
                />
                Artists from the last
                <select
                    id="select-time"
                    value={artistTimeFrame}
                    onChange={event => setArtistTimeFrame(event.target.value)}
                >
                    {Object.keys(TIMEFRAMES).map((timeFrame) => (
                        <option value={timeFrame} key={timeFrame}>{timeFrame}</option>
                    ))}
                </select>
            </p>

            <div id="button_box">
                <button
                    id="get_button"
                    onClick={() => {
                        if (!isValidCount(artistCount)) {
                            setMessage("Please enter a number between 1 and 50.");
                            return;
                        }

                        refreshArtists(token, setTopArtists, artistCount, artistTimeFrame, setArtistCount);
                        setTopArtistsFetched(true); // Mark that the button was clicked
                    }}
                >
                    Get Top Artists
                </button>
            </div>

            {message && <p id="playlist-message">{message}</p>}

            {topArtists ? (
                <div id="grid">
                    {topArtists.map((artist, i) => (
                        <ArtistItem number={i + 1} artist={artist} key={i} />
                    ))}
                </div>
            ) : (
                <p id="loading-message">Press button to load artists</p>
            )}
        </>
    );
}
