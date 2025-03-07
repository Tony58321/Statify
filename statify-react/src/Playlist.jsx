import React, { useState } from "react";
import { generatePlaylist } from "./generatePlaylist"; // Import the function

function Playlist({ token }) {
    const [timeRange, setTimeRange] = useState("medium_term");
    const [quantity, setQuantity] = useState(20);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleGeneratePlaylist = async () => {
        if (!token) {
            setMessage("Please enter a valid Spotify token.");
            return;
        }
        
        setLoading(true);
        setMessage("Generating playlist...");

        try {
            await generatePlaylist(token, () => {
                setMessage("Playlist successfully created! Check your Spotify.");
            }, quantity, timeRange);
        } catch (error) {
            console.error("Error generating playlist:", error);
            setMessage("An error occurred while generating the playlist.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Generate a Playlist from Your Top Tracks</h2>

            {/* Select time range */}
            <label>Time Range:</label>
            <select onChange={(e) => setTimeRange(e.target.value)} value={timeRange}>
                <option value="short_term">Last 4 Weeks</option>
                <option value="medium_term">Last 6 Months</option>
                <option value="long_term">Last Year</option>
            </select>

            {/* Number input for quantity */}
            <label>Number of Tracks:</label>
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                min="1" 
                max="50"
                style={{ marginLeft: "10px" }}
            />

            {/* Generate playlist button */}
            <button onClick={handleGeneratePlaylist} disabled={loading}>
                {loading ? "Generating..." : "Generate Playlist"}
            </button>

            {/* Display status message */}
            {message && <p>{message}</p>}
        </div>
    );
}

export default Playlist;
