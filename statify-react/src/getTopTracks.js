/*
getTopTracks() usage tutorial:
The getTopTracks() function takes care of all the work of returning the user's most listened to tracks!
Upon calling this function it will return a array of Track objects (I made a track class) that contains all the essential information, including
the track name, the artists, a link to the track on spotify, and the track cover art in the form of a url.

Call this function in App.jsx (or elsewhere if you find it useful)

The simplest call over in App.jsx will look something like this: topTracks = await getTopTracks(token)
where "topTracks" is just a variable that will hold the aformentioned Track array that getTopTracks returned.
Here is a format for a button as well:           <button onClick={async () =>{ topTracks = await getTopTracks(token)}  }>Get Top Tracks Test</button>

IMPORTANT NOTE: Only calling getTopTracks with "getTopTracks(token)" will grab the top tracks with the default arguments, which is return 20 tracks over the medium time term (past 6 months)
To get more specific, you will want to call it with a "quanity" and "time_range" argument in this format: getTopTracks(token, integer_quantity, time_range_string)
The integer quantity can be a integer value from 0 to 50.
And the time_range can be any of these three strings: 
- "short_term" , which is the past 4 weeks
- "medium_term", which is the past 6 months
- "long_term" , which is the past 1 year

When designing the frontend you'll probably want to implement some sort of input validation for these values because getTopTracks() does not validate input.
*/

export async function getTopTracks(token, quantity = 20, time_range =  "medium_term"){


    /*This block of code customizes the api call so we get exactly the stuff we want */
    let apiCallString = "https://api.spotify.com/v1/me/top/tracks"
    apiCallString =  `${apiCallString}?limit=${quantity}`                               //Set number of top tracks to return
    apiCallString =  `${apiCallString}&time_range=${time_range}`                                                                                   
    //Set tune range of tracks to return

    //This makes the api call to the Spotify API asking for the user top tracks
    let response = await fetch(apiCallString , {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    //If there is an error in fetching the data, this if() block will catch it and print error to the console.
    if (!response.ok) {
        console.error("Error fetching top tracks:", response.status, response.statusText);
        return null; // Or throw an error
    }

    //The fetched user top tracks stored in the "response" variable are put in an interpretable JSON format and put inside the tracksJson variable
    let tracksJson = await response.json();

    //The goal is to store all the top tracks the tracksArray. The array will be filled with Track objects, which contain all the key info about each of the tracks
    //See below for the Track class definition
    let tracksArray = []


    //For() loop iterates through each track returned in the API call. tracksJson.limit holds the integer value of how many tracks were retruened
    for( let i = 0 ;i<tracksJson.limit; i++){

        //currTrackJson holds the particular track we are extracting data for each iteration. In other words currTrackJson represents 1 track at any given moment
        
        let currTrackJson = tracksJson.items[i]
        console.log(currTrackJson);

        //console.log(currTrackJson.artists)
        //This block extracts the artist names from the current track, This is needed as each track may have more than one artist 
        let artistArr = []
        for(let j = 0; j < currTrackJson.artists.length; j++){
            artistArr.push(currTrackJson.artists[j].name)
        }

        //Finally, we can create our Track object for this particular track
        let trackToInsert = new Track(currTrackJson.name, currTrackJson.album.images[0].url , currTrackJson.external_urls.spotify ,   artistArr)
        //and insert the track object into the track array
        tracksArray.push(trackToInsert)

    }

    console.log(tracksArray)

    //return the tracksArray.
    return tracksArray;

    
    

    //It may the case that we don't n
    //handler({"total": 2 })
}


//WIP class, more fields need to be added still
export class Track{
    constructor(name,coverArtURL, trackUrl , artists) {
        this.name = name;
        this.coverArtURL = coverArtURL;
        this.url = trackUrl;
        this.artists = artists;
    }

}




/* 
export class Track{
    constructor(name, artists, album, url) {
        this.name = name;
        this.artists = artists; // Array of artist names
        this.album = album;
        this.url = url;
    }

}
*/



export default getTopTracks



//Old stuff:
/* 
function getTopTracks(handler, token){
    console.log("hi!");

    handler({"total": 2 })

}
*/