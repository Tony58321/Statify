// We will use this function to generate a playlist based on the user's top tracks
import getTopTracks from "./getTopTracks"

export async function generatePlaylist(token, onLoad, quantity = 20, time_range = "medium_term") {
// get user's top track information
//-----------------------------------------------------------------------------------
    // fetch user's top tracks
    const topTracks = await getTopTracks(token, () => {}, quantity, time_range);
    
    if (!topTracks || topTracks.length === 0) {
        console.error("Error fetching top tracks");
        return;
    }

    // this gets the track URIs from the top tracks map
    const trackURIs = topTracks.map(track => `spotify:track:${track.id}`);
    //-----------------------------------------------------------------------------------

// get user's spotify ID information
//-----------------------------------------------------------------------------------
    let userId;
    // 
    try {
        const userResponse = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        const userData = await userResponse.json();
        userId = userData.id;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return;
    }
//-----------------------------------------------------------------------------------

// here we create a new playlist
//-----------------------------------------------------------------------------------
    let playlistId;
    try {
        // this is api endpoint given by spotify
        const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `Top Tracks Playlist (${time_range.replace("_", " ")})`,
                description: `A playlist of your top tracks over the ${time_range.replace("_", " ")}`,
                public: false
            })
        });

        // DEBUGGING ---------------------------------------

        const playlistData = await playlistResponse.json();
        console.log("Playlist creation response:", playlistData); // Debugging

        // Check if the API returned a valid playlist ID
        if (!playlistData || !playlistData.id) {
            console.error("Error: Playlist was not created correctly.");
            return;
        }
        //---------------------------------------------------
    
        playlistId = playlistData.id;
    } catch (error) {
        console.error("Error creating playlist:", error);
        return;
    }
//-----------------------------------------------------------------------------------
    console.log("Created Playlist ID:", playlistId); // Ensure playlistId is valid

    console.log("Track URIs to add:", trackURIs);

// add tracks to the playlist
//-----------------------------------------------------------------------------------
    if (trackURIs.length > 0) {
        try {
            await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ uris: trackURIs })
            });

            console.log("Tracks added to playlist");
            console.log("User ID:", userId);

        } catch (error) {
            console.error("Error adding tracks to playlist:", error);
            return;
        }
    }

    if (onLoad) {
        onLoad();
    }
}