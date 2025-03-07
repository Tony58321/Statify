import React, { useState } from 'react';
import getTopTracks from './getTopTracks';
import { generatePlaylist } from './generatePlaylist';
import './Tracks.css'

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

function TrackItem({ number, track }) {
    return (
        <div id="spotify-item">
            <p>{number}. {track.name}</p>
            <img id="spotify-image" src={track.coverArtUrl} alt={track.name} />
        </div>
    );
}

function isValidCount(countString) {
    if (Number.isNaN(countString)) {
        return false;
    } else if (countString === "") {
        return true;
    } else if (MIN_TRACKS <= Number(countString) && Number(countString) <= MAX_TRACKS) {
        return true;
    } else {
        return false;
    }
}

function refreshTracks(token, setTopTracks, trackCount, trackTimeFrame, setTrackCount) {
    let count = trackCount;
    if (trackCount === "") {
        count = DEFAULT_TRACK_COUNT;
    } else if (!Number.isInteger(Number(count))) {
        count = Math.round(Number(count));
    }

    if (count < MIN_TRACKS) {
        count = MIN_TRACKS;
    } else if (count > MAX_TRACKS) {
        count = MAX_TRACKS;
    }

    setTrackCount(count);
    getTopTracks(token, setTopTracks, count, TIMEFRAMES[trackTimeFrame]);
}

export default function Tracks({ token, topTracks, setTopTracks }) {
    const [trackCount, setTrackCount] = useState(DEFAULT_TRACK_COUNT);
    const [trackTimeFrame, setTrackTimeFrame] = useState("4 weeks");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [topTracksFetched, setTopTracksFetched] = useState(false); 

    const handleGeneratePlaylist = async () => {
        if (!topTracks || topTracks.length === 0) {
            setMessage("No tracks available. Get top tracks first.");
            return;
        }

        setLoading(true);
        setMessage("Generating playlist...");

        try {
            await generatePlaylist(token, () => {
                setMessage("Playlist successfully created! Check your Spotify.");
            }, trackCount, TIMEFRAMES[trackTimeFrame]);
        } catch (error) {
            console.error("Error generating playlist:", error);
            setMessage("An error occurred while generating the playlist.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1 id="title">Tracks</h1>

            <p id="selection_menu">Get top
                <input
                    id="input-amount"
                    type='number'
                    value={trackCount}
                    onChange={event => isValidCount(event.target.value) ? setTrackCount(event.target.value) : null}
                />
                Tracks from the last
                <select
                    id="select-time"
                    value={trackTimeFrame}
                    onChange={event => setTrackTimeFrame(event.target.value)}
                >
                    {Object.keys(TIMEFRAMES).map((timeFrame) => <option value={timeFrame} key={timeFrame}>{timeFrame}</option>)}
                </select>
            </p>

            <div id="button_box">
                <button
                    id="get_button"
                    onClick={() => {
                        refreshTracks(token, setTopTracks, trackCount, trackTimeFrame, setTrackCount);
                        setTopTracksFetched(true); // to check whether get top tracks is clicked or not
                    }}
                >
                    Get Top Tracks
                </button>

                {/* Conditionally render the "Generate Playlist" button */}
                {topTracksFetched && (
                    <button
                        id="generate_button"
                        onClick={handleGeneratePlaylist}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Generate Playlist"}
                    </button>
                )}
            </div>

            {message && <p id="playlist-message">{message}</p>}

            {
                topTracks ?
                    <div id="grid">
                        {topTracks.map((track, i) => <TrackItem number={i + 1} track={track} key={i} />)}
                    </div>
                    :
                    <p id="loading-message">Press button to load tracks</p>
            }
        </>
    );
}