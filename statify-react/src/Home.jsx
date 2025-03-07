import './Home.css'
import { Track, getTopTracks } from './getTopTracks';
import { Artist, getTopArtists } from './getTopArtists';
//import { TasteComparator } from './TasteComparator';

export default function Home({ profile, token }){
    console.log(profile);

    let topTracks
    let topArtists

    return(
    <>
        <div id="homePage">
            <p id="welcome">Welcome, {profile.display_name}</p>
            {profile.images[0] ?
                <img id="profileImage" src={profile.images[0].url} alt={`${profile.display_name}'s profile image`}></img>
                :
                null  // don't display anything if no profile image
            }
            <a id="spotifyLink" href={profile.external_urls.spotify} target="_blank">Your Spotify</a>
            <ul>
                {/* <li>User ID: {profile.id}</li>*/}
                {/*<li>Email: {profile.email}</li>*/}
                {/* <li>Link: <a id="url" href={profile.href}>{profile.href}</a></li> */}
                {/* <li>Profile Image URL: 
                {profile.images[0] ? profile.images[0].url : " no profile image"}
                </li> */}
            </ul>
            {/* <button onClick={() =>{topTracks = getTopTracks(token)}  }>view top tracks test button</button> */}
            {/* <button onClick={async () =>{await TasteComparator(token)}}>Comparison Test Button</button>*/}
            {/* <button onClick={async () =>{topArtists = await getTopArtists(token)}}>Get Top Artists Test</button> */}
        </div>
    </>
    // delete the top track test buttons eventually
    )
}


