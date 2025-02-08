
/* 
function getTopTracks(handler, token){
    console.log("hi!");

    handler({"total": 2 })

}
*/



//goals for now: return essential details
//for the future, make it so can be more specific in what is being fetched



export async function getTopTracks(token, quantity = 5, time_range =  "medium_term"){


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


        //console.log(currTrackJson.artists)
        //This block extracts the artist names from the current track, This is needed as each track may have more than one artist 
        let artistArr = []
        for(let j = 0; j < currTrackJson.artists.length; j++){
            artistArr.push(currTrackJson.artists[j].name)
        }

        //Finally, we can create our Track object for this particular track
        let trackToInsert = new Track(currTrackJson.name, artistArr)
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
    constructor(name, artists) {
        this.name = name;
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