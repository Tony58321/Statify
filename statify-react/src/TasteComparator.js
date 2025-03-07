import { Track, getTopTracks } from './getTopTracks';

export default async function TasteComparator(token, userTracks, setUserTracks){

    console.log("Fetching trends:");
    let apiCallString = "https://api.spotify.com/v1/playlists/6UeSakyzhiEt4NB3UAd6NQ?market=US"

    let response = await fetch(apiCallString , {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });



    //If there is an error in fetching the data, this if() block will catch it and print error to the console.
    if (!response.ok) {
        console.error("Error fetching national top tracks:", response.status, response.statusText);
        return null; // Or throw an error
    }

    //The fetched user top tracks stored in the "response" variable are put in an interpretable JSON format and put inside the tracksJson variable
    let nationalTracksJson = await response.json();

    // convert the national tracks to a list of Track objects
    let NationalTracksArray = playlistTrackExtractor(nationalTracksJson);

    // get the user's top tracks
    //let UserTracksArray = await getTopTracks(token, nothing)
    if (!userTracks || userTracks.length < 20) {  // if the tracks have not been fetched yet
        await getTopTracks(token, setUserTracks);  // fetches tracks, stores so that they can be re-used later
    }


    console.log("National Tracks:")
    console.log(NationalTracksArray);
    console.log("User Tracks:")
    console.log(userTracks);


    return;  // what ever is returned here will be sent to the trends page and stored in the trends variable
}





/* 
This function is very similar to getTopTracks() in that it returns a array of tracks, rather than doing it based off a user top tracks, this is done by extracting the data from a playlist

*/
function playlistTrackExtractor(playlistJSON){


    let tracksArray = []


    for( let i = 0 ;i<playlistJSON.tracks.limit; i++){

        let currTrackJson = playlistJSON.tracks.items[i].track;


        let artistArr = []
        for(let j = 0; j < currTrackJson.artists.length; j++){
            artistArr.push(currTrackJson.artists[j].name)
        }

        //Finally, we can create our Track object for this particular track
        let trackToInsert = new Track(currTrackJson.name,artistArr , currTrackJson.album.images[0].url , currTrackJson.external_urls.spotify,currTrackJson.id )
        //and insert the track object into the track array
        tracksArray.push(trackToInsert)
    }


    return tracksArray;
}
