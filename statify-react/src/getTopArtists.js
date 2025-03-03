
/* getTopArtists grabs information about a users top artists from the spotify api.
   it makes a call to the api using information input from users. if no information is given,
   it will return the default inputs.
*/
export async function getTopArtists(token, onLoad, quantity=10, time_range="medium_term"){

    // this is api endpoint given by spotify
    let apiCallString = "https://api.spotify.com/v1/me/top/artists"
    // filling in the rest of the api call with input from user
    apiCallString =  `${apiCallString}?limit=${quantity}`
    apiCallString =  `${apiCallString}&time_range=${time_range}`                                                                                   

    // call the api with the api endpoint
    let response = await fetch(apiCallString , {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    // error handling the reponse
    if (!response.ok) {
        console.error("Error fetching top artists:", response.status, response.statusText);
        //onLoad([])
        return null;
    }

    // put the response from the api into json format, so that it can be stored
    let artistsJson = await response.json();

    // an array to store information about the artist
    let artistsArray = []

    // for-loop to loop through json content and store content into an array
    for(let i = 0; i < artistsJson.limit; i++){    
        // the current artist from the json   
        let currArtJson = artistsJson.items[i]

        // gets image url
        let imageUrl = (currArtJson.images && currArtJson.images.length > 0) 
        ? currArtJson.images[0].url 
        : null;
        
        // create new artist object with information from json
        let artists = new Artist(currArtJson.name, currArtJson.popularity, imageUrl)

        // push the new artist onto the array of artists
        artistsArray.push(artists)
    }

    // output the artist array to the console
    console.log(artistsArray)

    // Trinity added this, it doesnt work
    onLoad(artistsArray);
}

/*this class stores information about a users top artists*/
export class Artist{
    constructor(name, popularity, imageUrl) {
        this.name = name;
        this.popularity = popularity;
        this.imageUrl = imageUrl; 
    }
}

/*this was in the getTopTracks file, not sure what it's needed for?*/
export default getTopArtists
