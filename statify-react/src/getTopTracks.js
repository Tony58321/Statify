
/* 
function getTopTracks(handler, token){
    console.log("hi!");

    handler({"total": 2 })

}
*/



//goals for now: return essential details
//for the future, make it so can be more specific in what is being fetched



export async function getTopTracks(handler, token, quantity = 5, time_range =  "medium_term"){


    /*This block of code customizes the api call so we get exactly the stuff we want */
    let apiCallString = "https://api.spotify.com/v1/me/top/tracks"
    apiCallString =  `${apiCallString}?limit=${quantity}`                               //Set number of top tracks to return
    apiCallString =  `${apiCallString}&time_range=${time_range}`                                                                                   
    //Set tune range of tracks to return


    let response = await fetch(apiCallString , {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
        console.error("Error fetching top tracks:", response.status, response.statusText);
        return null; // Or throw an error
    }


    let tracksJson = await response.json();


    //just a lil view of all the things
    console.log(tracksJson)
    console.log(tracksJson.items)


    let tracksArray = []
    for( let i = 0 ;i<tracksJson.limit; i++){

        //console.log(tracksJson.items[i].name)

        let trackToInsert = new Track(tracksJson.items[i].name)

        tracksArray.push(trackToInsert)

    }

    console.log(tracksArray)


    return tracksArray;

    
    

    //It may the case that we don't n
    handler({"total": 2 })

}


//WIP class

export class Track{
    constructor(name) {
        this.name = name;
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